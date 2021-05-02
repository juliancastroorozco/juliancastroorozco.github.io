var presets = {
  "AttackUp": ["Animal_Insect_G", "Item_Plant_G", "Item_Fruit_H", "Item_Mushroom_L", "Animal_Fish_E", "Item_FishGet_E", "Animal_Insect_K", "Animal_Fish_F", "Item_FishGet_F"],
  "MovingSpeed": ["Animal_Insect_S", "Item_MushroomGet_D", "Item_Mushroom_D", "Item_PlantGet_M", "Item_Plant_M", "Animal_Insect_A", "Item_Plant_O", "Item_Fruit_E", "Item_PlantGet_O"],
  "Fireproof": ["Animal_Insect_X"],
  "Cooking Pots": ["Item_CookSet", "Item_CookSet_PanOnly"],
  "Horses": ["WildHorseCreateTag", "WildHorseCreateTag01", "WildHorseCreateTag02", "WildHorseCreateTag03", "GameRomHorseBone", "GameRomHorseNushi", "GameRomHorseZelda", "GameRomHorse00L"],
  "Overworld Bosses": ["Enemy_Giant_Bone", "Enemy_Giant_Bone_AllDay", "Enemy_Giant_Junior", "Enemy_Giant_Middle", "Enemy_Giant_Senior", "Enemy_Golem_Fire", "Enemy_Golem_Ice", "Enemy_Golem_Junior", "Enemy_Golem_Middle", "Enemy_Golem_Senior", "Enemy_Lynel_Dark", "Enemy_Lynel_Junior", "Enemy_Lynel_Junior_Mountain", "Enemy_Lynel_Middle", "Enemy_Lynel_Senior", "Enemy_Sandworm", "Enemy_Assassin_Senior"],
  "Treasure Chests": ["TBox"],
  "DLC": ["Aoc", "HARD:"],
  "Permamently Used": ['BreakableRock', 'DgnObj_WallCrack_C_01', 'DgnObj_WallCrack_Wind_A_02', 'Enemy_Assassin_Senior', 'Enemy_Ganon', 'Enemy_Guardian_Mini_Practice', 'Enemy_SiteBoss_Bow', 'Enemy_SiteBoss_Lsword', 'Enemy_SiteBoss_Spear', 'Enemy_SiteBoss_Sword', 'FldObj_AssassinPicture_A_01', 'FldObj_AssassinPicture_A_02', 'FldObj_BreakableRockDeathMT_A_01', 'FldObj_BreakableRockDeathMT_A_02', 'IceWall', 'IceWallRuins', 'IceWallRuins_Challenge', 'IceWall_100enemy', 'IceWall_Tower', 'Item_Enemy_02', 'Item_Enemy_05', 'Item_Enemy_26', 'Item_Enemy_27', 'Item_Enemy_28', 'Item_Enemy_29', 'Item_Enemy_30', 'Item_Enemy_31', 'Obj_AncientArrow_A_01', 'Obj_AncientArrow_B_01', 'Obj_AncientArrow_C_01', 'Obj_ArrowBundle_A_01', 'Obj_ArrowBundle_A_02', 'Obj_ArrowBundle_A_10', 'Obj_ArrowNormal_A_01', 'Obj_BombArrow_A_01', 'Obj_BombArrow_A_02', 'Obj_BombArrow_A_03', 'Obj_BombArrow_A_04', 'Obj_CursedStatue', 'Obj_DungeonClearSeal', 'Obj_ElectricArrow_A_01', 'Obj_ElectricArrow_A_02', 'Obj_ElectricArrow_A_03', 'Obj_ElectricArrow_B_01', 'Obj_FireArrow_A_01', 'Obj_FireArrow_A_02', 'Obj_FireArrow_A_03', 'Obj_HeartUtuwa_A_01', 'Obj_HeroSoul_Gerudo', 'Obj_HeroSoul_Goron', 'Obj_HeroSoul_Rito', 'Obj_HeroSoul_Zora', 'Obj_IceArrow_A_01', 'Obj_IceArrow_A_02', 'Obj_IceArrow_A_03', 'Obj_KorokNuts', 'Obj_Maracas', 'Obj_RockBroken_A_02', 'Obj_StaminaUtuwa_A_01', 'Obj_ThunderRock', 'Obj_WarpDLC', 'PutRupee', 'PutRupee_Blue', 'PutRupee_Gold', 'PutRupee_Purple', 'PutRupee_Red', 'PutRupee_Silver', 'RemainsFire_Drone_A_01', 'TBox_Field_Enemy', 'TBox_Field_Iron', 'TBox_Field_Iron_NoReaction', 'TBox_Field_Iron_NoReaction_Aoc', 'TBox_Field_Iron_NoReaction_Aoc_long', 'TBox_Field_Stone', 'TBox_Field_Stone_NoReaction', 'TBox_Field_Wood', 'TreasureSpot_00', 'TwnObj_HyruleCastleObject_Wallcrack_Before_A_01', 'TwnObj_HyruleCity_Tower_WallCrack_A_01', 'VolcanoEruptionField', 'WallCrack', 'WallCrack_Wind', 'Weapon_Spear_049', 'Weapon_Sword_070', 'FldObj_RuinGuardianSand_A_Dynamic', 'FldObj_RuinGuardianSnow_A_Dynamic', 'FldObj_RuinGuardian_A_Dynamic', 'BM_Relief', 'DgnObj_AncientReactor_B_01', 'DgnObj_AncientReactor_B_01_on', 'DgnObj_DownloadTerminal_A_01', 'DgnObj_DungeonEntranceSP', 'DgnObj_DungeonEntranceSP_Far', 'DgnObj_EntranceTerminalSP', 'DgnObj_EntranceTerminal_A_01', 'DgnObj_RemainsLithogragh_A_02', 'DgnObj_RemainsLithograph_A_01', 'DgnObj_RemainsTerminalBody_A', 'FldObj_DownloadTerminal_A_01', 'FldObj_Terminal_A_01', 'Mannequin_001_Head', 'Mannequin_001_Lower', 'Mannequin_001_Upper', 'Mannequin_002_Head', 'Mannequin_002_Lower', 'Mannequin_002_Upper', 'Mannequin_003_Head', 'Mannequin_003_Lower', 'Mannequin_003_Upper', 'Mannequin_004_Head', 'Mannequin_004_Lower', 'Mannequin_004_Upper', 'Mannequin_005_Head', 'Mannequin_005_Lower', 'Mannequin_005_Upper', 'Mannequin_006_Head', 'Mannequin_006_Lower', 'Mannequin_006_Upper', 'Mannequin_007_Head', 'Mannequin_007_Lower', 'Mannequin_007_Upper', 'Mannequin_008_Head', 'Mannequin_008_Lower', 'Mannequin_008_Upper', 'Mannequin_009_Upper', 'Npc_HiddenKorokFly', 'Npc_HiddenKorokGround', 'ShutterKey', 'SwitchCandlestickAncient', 'SwitchCandlestickAncientOn', 'TBox_Dungeon_Iron', 'TBox_Dungeon_Iron_050', 'TBox_Dungeon_Iron_Hanged', 'TBox_Dungeon_Stone', 'TBox_Dungeon_Wood', 'TBox_Dungeon_Wood_AreaCulling', 'TBox_Field_Iron_GodTree', 'TwnObj_AncientCandlePoleRoofOff_A_01', 'TwnObj_AncientReactorCoreOff_A_01', 'TwnObj_AncientReactorCore_A_01', 'TwnObj_ArtifactObservationPostBed_A_01', 'TwnObj_GateKeeperBed_A_01', 'TwnObj_HeburaLodgeBed_A_01', 'TwnObj_HunterHouseBed_A_01', 'TwnObj_Village_KorokBed_A_01', 'TwnObj_Village_SakuradaBed_A_01', 'TwnObj_Village_ZoraFacilityBed_A_01']
};
/*
var map = L.map('botw_map', {
  preferCanvas: true,
  minZoom: -4,
  maxZoom: 4,
  center: [0, 0],
  zoom: -4,
  crs: L.CRS.Simple
});
var southWest = map.unproject([-6000, 5000], 0);
var northEast = map.unproject([6000, -5000], 0);
var bounds = new L.LatLngBounds(southWest, northEast);
L.imageOverlay('BotW-Map-Grid.png', bounds).addTo(map);
map.setMaxBounds(bounds);
*/

var mapOptions = {"id":"19","name":"Breath of the Wild","shortName":"BotW","icon":"Breath-of-the-Wild","markerURL":"markers/","markerExt":"png","bgColor":"#000000","showMapControl":"1","showZoomControl":"1","centerX":"112","centerY":"-159","boundTopX":"-49.875","boundTopY":"34.25","boundBottomX":"-206","boundBottomY":"221","clusterMaxZoom":"9","clusterGridSize":"50","defaultZoom":"5","maxZoom":"8","tileSize":"256","iconWidth":"23","iconHeight":"23","iconSmallWidth":"16","iconSmallHeight":"23","switchIconsAtZoom":"5","collapsed":false,"showCategoryControl":true,"showCategoryControlOpened":true,"zoom":"5","zoomSnap":1,"zoomDelta":1,"startArea":[["-168","102"],["-148","122"]],"help":true,"showCompleted":true,"categorySelectionMethod":"focus"};


 

var map =  L.map('botw_map', { center:      new L.LatLng(mapOptions.centerY,mapOptions.centerX)
  , zoom:        0
  , zoomSnap:    mapOptions.zoomSnap
  , zoomDelta:   mapOptions.zoomDelta
  , zoomControl: false
  , crs:         L.CRS.Simple
                      //, layers:      [maps[0]]
                     // @TODO: Add bounds to Database, so everygame has different bounds
                     , maxBounds:  new L.LatLngBounds(new L.LatLng(mapOptions.boundTopX, mapOptions.boundTopY), new L.LatLng(mapOptions.boundBottomX, mapOptions.boundBottomY))
                     , maxBoundsViscosity: 1.0
                     , contextmenu: true
                     , contextmenuWidth: 140
                   });

L.tileLayer("https://zeldamaps.com/tiles/botw/hyrule/{z}_{x}_{y}.png", {
}).addTo(map);

var query = window.location.href.search('list=');
var locationfile = 'map_locations.js';

if (query > 0) {
  locationfile = window.location.href.substr(window.location.href.search('list=') + 5) + '.js';
}

$.getScript(locationfile, function () {
  for (var key in locations) {
      locations[key].locations.forEach(function(item, i, arr) {
        // do something with `item`
        arr[i] = [
          item[0]*0.0155625+127.625,
          item[1]*0.0156125- 127.9375256+256
        ];
    });
  }  
  var internal_names = Object.keys(locations).sort();
  var listHtml = internal_names.map(renderListItem).join("");
  $('#sidebar > ul').append(listHtml);
  var icons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (i) {
    return L.divIcon({
      className: 'div-icon' + i
    });
  });
  var markers = {};
  var markerClusterGroupOptions = {
    removeOutsideVisibleBounds: true,
    spiderfyOnMaxZoom: false,
    disableClusteringAtZoom: 0,
    animate: false,
    maxClusterRadius: 20,
    iconCreateFunction: function iconCreateFunction(cluster) {
      var childMarkers = cluster.getAllChildMarkers();
      var titleText = '';
      var iconClassName = '';

      if (childMarkers.length > 0) {
        var childOptions = childMarkers[0].options;
        titleText = childOptions.title;

        if (childOptions.icon) {
          iconClassName = childOptions.icon.options.className || '';
        }
      } // Set the options and icon based on inherited child values


      cluster.options.title = childMarkers.length + " x " + titleText;
      return L.divIcon({
        html: cluster.getChildCount(),
        className: "big-icon " + iconClassName,
        iconSize: [18, 18]
      });
    }
  }; // Note: in case we want to load the sidebar items asynchronously, using this style of event
  // handler will apply to both current and future items

  $('#sidebar > ul').on('change', 'input', function () {
    if (!(this.name in markers)) {
      markers[this.name] = L.markerClusterGroup(markerClusterGroupOptions);
    }

    var groupMarker = markers[this.name];

    if ($(this).is(':checked')) {
      //console.log([this.name, stringToValue(this.name) ,  icons.length])
      //console.log([stringToValue(this.name)%icons.length])
      var iconColor = icons[stringToValue(this.name) % icons.length];
      if(this.name == "Item_Plant_C"){//big <3
        iconColor = icons[0];
      }
      if(this.name == "Item_Fruit_D"){//durian pink
        iconColor = icons[1];
      }
      if(this.name == "Item_Plant_Q"){//carrot
        iconColor = icons[2];
      }
      //console.log(iconColor)
      var markerOptions = {
        icon: iconColor,
        keyboard: false,
        title: getExpandedName(this.name)
      };
      var targetLocations = locations[this.name].locations;
      var newMarkers = targetLocations.map(function (target) {
        var coords = map.unproject(target, 0);
        return L.marker(coords, markerOptions);
      });
      groupMarker.addLayers(newMarkers);
      map.addLayer(groupMarker);
    } else {
      map.removeLayer(groupMarker);
      groupMarker.clearLayers(); // Get some memory back?
    }
  });
  var sidebarList = new List("sidebar", {
    valueNames: ['itemName']
  }); // Create preset filters

  var presetOptions = Object.keys(presets).map(function (presetName) {
    return '<option>' + presetName + '</option>';
  });
  $('#filter').append(presetOptions.join(""));
  $("#filter").chosen().change(function () {
    var selectedOptions = $(this).val();

    if (!selectedOptions) {
      sidebarList.filter();
    } else {
      var regexList = $(this).val().map(function (presetName) {
        return new RegExp('.*(' + presets[presetName].join("|") + ').*');
      });
      sidebarList.filter(function (item) {
        var itemName = item.values().itemName;
        return regexList.every(function (regex) {
          return regex.test(itemName);
        });
      });
    }
  });
  $('#selectAll').click(function () {
    $('.list input:checkbox:not(:checked)').prop('checked', true).trigger('change');
  });
  $('#selectNone').click(function () {
    $('.list input:checkbox:checked').prop('checked', false).trigger('change');
  $('input[name="Item_Plant_C"]').trigger('click');
  $('input[name="Item_Fruit_D"]').trigger('click');
  $('input[name="Item_Plant_Q"]').trigger('click');
  });
  sidebarList.on('searchComplete', setSelectAllSafety);
  sidebarList.on('filterComplete', setSelectAllSafety);

  function setSelectAllSafety() {
    $('#selectAll').prop('disabled', sidebarList.matchingItems.length > 1000);
  }
}); // hash the string

function stringToValue(str) {
  var hash = 0;

  for (i = 0; i < str.length; i++) {
    char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }

  return Math.abs(hash);
}

;

function getExpandedName(internal_name) {
  return (locations[internal_name].display_name !== internal_name ? locations[internal_name].display_name + ' — ' : '') + internal_name;
}

function renderListItem(internal_name) {
  var s = '<li><label><input type="checkbox" name="' + internal_name + '">';

  if (locations[internal_name].display_name !== internal_name) {
    s += '<span class="display-name">' + locations[internal_name].display_name + '</span> <span class="name-separator">—</span> ';
  }

  s += '<span class="internal-name">' + internal_name + '</span><span class="itemName">' + getExpandedName(internal_name) + '</span></label></li>';
  return s;
};
$("<style type='text/css'>    .div-icon0 { border-radius: 50%; border: 1px solid #00FFFF; background: pink !important};.div-icon1 { border-radius: 50%; border: 1px solid #FFFF00; background: yellow  !important};.div-icon2 { border-radius: 50%; border: 1px solid #FF00FF; background: orange  !important}</style>").appendTo("head");
//$(".leaflet-image-layer").attr('src','https://drive.google.com/uc?export=view&id=1p9YyXTo3zImq3vwXjV0oBOKx7eGwimDO');
