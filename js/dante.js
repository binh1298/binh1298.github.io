var switchingModel = false;
function switchCharacterDante(){
  if(switchingModel) return;
  switchingModel = true;
  var x = document.getElementById("dante-model-back");
  var y = document.getElementById("dante-model-front");
  x.style.transform = "translateX(30%)";
  y.style.transform = "translateX(-30%)";
  x.style.opacity = "1";
  y.style.opacity = "0.4";
  function switchID(){
    var temp = x.id;
    x.id = y.id;
    y.id = temp;

  }
  setTimeout(function(){
    x.style.transform = "translateX(0)";
    y.style.transform = "translateX(0)";
    switchID();
    setTimeout(function(){
      switchingModel = false;
    }, 500);
  }, 400)
}
var currentDanteCarouselPos = 0;
function changeCarouselDante(direction)
{
  currentDanteCarouselPos = (currentDanteCarouselPos + direction)%4;
  if(currentDanteCarouselPos < 0) currentDanteCarouselPos = 3;
  var carouselGrid = document.getElementById("dante-video-carousel");
  carouselGrid.style.transform = "translateX(-"+ currentDanteCarouselPos * 100 + "%)";
  carouselGrid.children[currentDanteCarouselPos].currentTime = "0";
}