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