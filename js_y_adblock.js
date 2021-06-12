var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = '#player-container-id{ right: 0}; video{width: 100%}';
document.body.appendChild(css);
/*
document.getElementsByTagName("video")[0].onloadedmetadata = function() {
  if(document.getElementsByClassName("ytp-ad-text")[0]){
    document.getElementsByTagName("video")[0].currentTime = document.getElementsByTagName("video")[0].duration;
  }  
}
*/
setInterval(function (){
  if(document.getElementsByClassName("ytp-ad-text")[0] && document.getElementsByTagName("video")[0].currentTime < 2){
    //document.getElementsByTagName("video")[0].currentTime = document.getElementsByTagName("video")[0].duration;
    document.getElementsByTagName("video")[0].currentTime = document.getElementsByTagName("video")[0].duration - 0.01;
    setTimeout(function(){
      document.getElementsByTagName("video")[0].play();
    },1000)
  }
},100);



(function(open) {
  XMLHttpRequest.prototype.open = function() {    
    if(arguments[1].match('ad_break')){
      return;
    }
     open.apply(this, arguments);
  };
})(XMLHttpRequest.prototype.open);
