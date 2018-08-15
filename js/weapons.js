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