var disableIntroVid = false;

function removeLoadingScreen()
{
  scrollToDiv("halfs-container");
  document.getElementById("loading-screen").remove();
  document.getElementById("introVid").play();
  pauseIntro();
  changeCarouselNero();
  initializePageStorage();
}
function pauseIntro()
{
  var introVid = document.getElementById("introVid");
  setTimeout(function(){
    introVid.pause();
    setTimeout(showLandingPage, 1000);
    },
    10000);
}
function showLandingPage()
{
  if(disableIntroVid) return;
  var introVid = document.getElementById("introVid");
  function vanishVid(){
    introVid.style.opacity = "0";
    introVid.style.zIndex = "-1";
    disableIntroVid = true;
  }
  introVid.style.opacity = 0;
  setTimeout(vanishVid, 1000);
  var danteContainer = document.getElementById("dante-container");
  var neroContainerChild = document.getElementById("nero-container-child");
  var navBar = document.getElementsByClassName("nav-bar")[0];
  danteContainer.style.left = 0;
  neroContainerChild.style.right = "-50vw";
  navBar.style.top = 0;
  setTimeout(function(){
    navBar.style.opacity = 0.3;
  }, 1000);
}

function scrollToDiv(id)
{
  document.getElementById(id).scrollIntoView({ block: 'start',  behavior: 'smooth' });
  // console.log(id);
  // window.scroll({
  //   top: document.getElementById(id).offsetTop, 
  //   left: 0, 
  //   behavior: 'smooth' 
  // });
}
function changeHalfsSizes(object, event)
{
  if(screen.width <= 1024 || !disableIntroVid) return;
  var currentMouseVerticalPos = event.clientX;
  var totalWidth = screen.width;
  var danteContainer = document.getElementById("dante-container");
  var neroContainer = document.getElementById("nero-container");
  var neroContainerChild = document.getElementById("nero-container-child");
  var currentRatio = currentMouseVerticalPos/totalWidth;
  // console.log(currentRatio);
  if(currentRatio < 0.2) currentRatio = 0;
  if(currentRatio > 0.8) currentRatio = 1;
  if(currentRatio > 0.5)
  {
    neroContainerChild.style.right = "-" + (1-(currentRatio-0.5)*2)*50 + "vw";
    neroContainer.style.zIndex = 2;
    danteContainer.style.zIndex = 1;
    danteContainer.style.opacity = (1-currentRatio)*2;
    var tempArr = neroContainerChild.getElementsByTagName("*");
    for(var i = 0; i<tempArr.length; i++)
    {
      tempArr[i].style.right = (1-(currentRatio-0.5)*2)*50 +"vw";
    }
  }
  else
  {
    danteContainer.style.width = (1-currentRatio)*100 + "vw";
    danteContainer.style.zIndex = 2;
    neroContainer.style.zIndex = 1;
    neroContainer.style.opacity = currentRatio*2;
  }
}
function resetDefaultHalfsSizes()
{
  var danteContainer = document.getElementById("dante-container");
  var neroContainer = document.getElementById("nero-container");
  var neroContainerChild = document.getElementById("nero-container-child");
  danteContainer.style.width = "50vw";
  neroContainerChild.style.right = "-50vw";
  var tempArr = neroContainerChild.getElementsByTagName("*");
  for(var i = 0; i<tempArr.length; i++)
  {
    tempArr[i].style.right = "50vw";
  }
  danteContainer.style.opacity = 1;
  neroContainer.style.opacity = 1;
}