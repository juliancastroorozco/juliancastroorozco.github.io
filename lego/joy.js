import {
  connectJoyCon,
  connectedJoyCons,
  JoyConLeft,
  JoyConRight,
  GeneralController,
} from './joy-con-webhid.es.js';
document.querySelector('.connect').addEventListener('click', async () => {
  // `JoyCon.connectJoyCon()` handles the initial HID pairing.
  // It keeps track of connected Joy-Cons in the `JoyCon.connectedJoyCons` Map.
  await connectJoyCon();
});
setInterval(async () => {
  for (const joyCon of connectedJoyCons.values()) {
    if (joyCon.eventListenerAttached) {
      continue;
    }
    // Open the device and enable standard full mode and inertial measurement
    // unit mode, so the Joy-Con activates the gyroscope and accelerometers.
    await joyCon.open();
    await joyCon.enableStandardFullMode();
    await joyCon.enableIMUMode();
    //await joyCon.enableVibration();
    // Get information about the connected Joy-Con.
    //console.log(await joyCon.getDeviceInfo());
    // Rumble.
    //await joyCon.rumble(600, 600, 0.5);
    // Listen for HID input reports.
    joyCon.addEventListener('hidinput', ({ detail }) => {
      const {    
    buttonStatus: buttons,
  } = detail;
      // Careful, this fires at ~60fps.
      //console.log(`Input report from ${joyCon.device.productName}:`, {x:buttons.x,y:buttons.y,a:buttons.a,b:buttons.b});
      buttonUpdated && buttonUpdated(buttons)
    });
    joyCon.eventListenerAttached = true;
  }
}, 2000);
