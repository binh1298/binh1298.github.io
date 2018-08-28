function initializeVideoSrc(){
  var videoContainer = document.getElementById("dante-action-arm");
  var armSrc = [
    "resources/video/Dante/compressed_actions/dante_4.mp4",
    "resources/video/Dante/compressed_actions/dante_7.mp4",
    "resources/video/Dante/compressed_actions/dante_6.mp4"
  ]
  videoContainer.children[0].lastElementChild.firstElementChild.src = armSrc[0];
  videoContainer.children[1].lastElementChild.firstElementChild.src = armSrc[1];
  videoContainer.children[2].lastElementChild.firstElementChild.src = armSrc[2];
  videoContainer.children[0].lastElementChild.load();
  videoContainer.children[1].lastElementChild.load();
  videoContainer.children[2].lastElementChild.load();
  
  videoContainer = document.getElementById("dante-action-gun");
  var gunSrc = [
    "resources/video/Dante/compressed_actions/dante_1.mp4",
    "resources/video/Dante/compressed_actions/dante_2.mp4",
    "resources/video/Dante/compressed_actions/dante_3.mp4"
  ]
  videoContainer.children[0].lastElementChild.firstElementChild.src = gunSrc[0];
  videoContainer.children[1].lastElementChild.firstElementChild.src = gunSrc[1];
  videoContainer.children[2].lastElementChild.firstElementChild.src = gunSrc[2];
  videoContainer.children[0].lastElementChild.load();
  videoContainer.children[1].lastElementChild.load();
  videoContainer.children[2].lastElementChild.load();

}

var currentArtWorkPos = [0, 0];
function switchArtWork(awf, awb){
  containerDanteAction1 = document.getElementById(awf);
  containerDanteAction2 = document.getElementById(awb);
  containerDanteAction1.style.zIndex = 2;
  containerDanteAction1.style.opacity = 1;
  containerDanteAction2.style.zIndex = 1;
  containerDanteAction2.style.opacity = 0;
}
function changeWeaponHudClockwise(obj){
  containerHUD = obj.children;
  var temp = containerHUD[0].id;
  containerHUD[0].id = containerHUD[1].id;
  containerHUD[1].id = containerHUD[2].id;
  containerHUD[2].id = temp;

  containerDanteAction = document.getElementById("dante-action-gun").children;
  switchArtWork("dante-action-gun", "dante-action-arm");
  temp = containerDanteAction[0].id;
  containerDanteAction[0].id = containerDanteAction[1].id;
  containerDanteAction[1].id = containerDanteAction[2].id;
  containerDanteAction[2].id = temp;
  containerDanteAction[0].lastElementChild.currentTime = "0";
  containerDanteAction[1].lastElementChild.currentTime = "0";
  containerDanteAction[2].lastElementChild.currentTime = "0";
}
function changeWeaponHudCounterClockwise(obj){
  containerHUD = obj.children;
  var temp = containerHUD[0].id;
  containerHUD[0].id = containerHUD[2].id;
  containerHUD[2].id = containerHUD[1].id;
  containerHUD[1].id = temp;

  containerDanteAction = document.getElementById("dante-action-arm").children;
  switchArtWork("dante-action-arm", "dante-action-gun");
  temp = containerDanteAction[0].id;
  containerDanteAction[0].id = containerDanteAction[2].id;
  containerDanteAction[2].id = containerDanteAction[1].id;
  containerDanteAction[1].id = temp;
  containerDanteAction[0].lastElementChild.currentTime = "0";
  containerDanteAction[1].lastElementChild.currentTime = "0";
  containerDanteAction[2].lastElementChild.currentTime = "0";
}