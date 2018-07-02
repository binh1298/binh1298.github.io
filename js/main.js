function pauseIntro()
{
  var introVid = document.getElementById("introVid");
  function pauseVid(){
    introVid.pause();
    setTimeout(showLandingPage, 1000);
  }
  setTimeout(pauseVid, 10000);
}
function showLandingPage()
{
  var introVid = document.getElementById("introVid");
  function vanishVid(){
    introVid.style.display = "none";
  }
  // Combine with css to make slow transition
  introVid.style.opacity = 0;
  setTimeout(vanishVid, 1000);
  var danteContainer = document.getElementById("dante-container");
  var neroContainer = document.getElementById("nero-container");
  danteContainer.style.left = 0;
  neroContainer.style.right = 0;
}
function changeHalfsSizes(object, event)
{
  var currentMouseVerticalPos = event.clientX;
  var totalWidth = screen.width;
  var halfsContainer = document.getElementById("halfs-container")
  var danteContainer = document.getElementById("dante-container");
  var neroContainer = document.getElementById("nero-container");
  var currentRatio = currentMouseVerticalPos/totalWidth;
  console.log(currentRatio);
  if(currentRatio > 0.5)
  {
    halfsContainer.style.gridTemplateColumns = (1-currentRatio)*100 + "% " + currentRatio*100 + "%";
    danteContainer.style.opacity = (1 - currentRatio)*2;
  }
  else
  {
    neroContainer.style.width = "100%";
    danteContainer.style.width = (1-currentRatio)*200 + "%";
    danteContainer.style.zIndex = 1;
    neroContainer.style.opacity = currentRatio*2;
  }
}
function resetDefaultHalfsSizes()
{
  var halfsContainer = document.getElementById("halfs-container")
  var danteContainer = document.getElementById("dante-container");
  var neroContainer = document.getElementById("nero-container");
  halfsContainer.style.gridTemplateColumns = "50% 50%";
  danteContainer.style.width = "100%";
  neroContainer.style.width = "100%"; 
  danteContainer.style.opacity = 1;
  neroContainer.style.opacity = 1;
}