var currentArtWorkPos = [0, 0];
function switchArtWork(awf, awb){
  containerArtWork1 = document.getElementById(awf);
  containerArtWork2 = document.getElementById(awb);
  containerArtWork1.style.zIndex = 2;
  containerArtWork1.style.opacity = 1;
  containerArtWork2.style.zIndex = 1;
  containerArtWork2.style.opacity = 0;
}
function changeWeaponHudClockwise(obj){
  containerHUD = obj.children;
  var temp = containerHUD[0].id;
  containerHUD[0].id = containerHUD[1].id;
  containerHUD[1].id = containerHUD[2].id;
  containerHUD[2].id = temp;

  containerArtWork = document.getElementById("art-work-gun").children;
  switchArtWork("art-work-gun", "art-work-arm");
  temp = containerArtWork[0].id;
  containerArtWork[0].id = containerArtWork[1].id;
  containerArtWork[1].id = containerArtWork[2].id;
  containerArtWork[2].id = temp;
}
function changeWeaponHudCounterClockwise(obj){
  containerHUD = obj.children;
  var temp = containerHUD[0].id;
  containerHUD[0].id = containerHUD[2].id;
  containerHUD[2].id = containerHUD[1].id;
  containerHUD[1].id = temp;

  containerArtWork = document.getElementById("art-work-arm").children;
  switchArtWork("art-work-arm", "art-work-gun");
  temp = containerArtWork[0].id;
  containerArtWork[0].id = containerArtWork[2].id;
  containerArtWork[2].id = containerArtWork[1].id;
  containerArtWork[1].id = temp;
}