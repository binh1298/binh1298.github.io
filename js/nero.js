function switchCharacterNero(){
  if(switchingModel) return;
  switchingModel = true;
  var x = document.getElementById("nero-model-back");
  var y = document.getElementById("nero-model-front");
  x.style.transform = "translateX(-80%)";
  y.style.transform = "translateX(-20%)";
  x.style.opacity = "1";
  y.style.opacity = "0.4";
  function switchID(){
    var temp = x.id;
    x.id = y.id;
    y.id = temp;

  }
  setTimeout(function(){
    x.style.transform = "translateX(-50%)";
    y.style.transform = "translateX(-50%)";
    switchID();
    setTimeout(function(){
      switchingModel = false;
    }, 500);
  }, 400)
}
var currentNeroCarouselPos = 0;
function changeCarouselNero()
{
  var carouselGrid = document.getElementById("nero-video-carousel");
  currentNeroCarouselPos = (currentNeroCarouselPos + 1) % carouselGrid.children.length;
  if(currentNeroCarouselPos < 0) currentNeroCarouselPos = 3;
  carouselGrid.style.transform = "translateX(-"+ currentNeroCarouselPos * 100 + "%)";
  setTimeout(changeCarouselNero, 2000);
}