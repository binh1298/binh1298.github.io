var disableIntroVid = false;

function removeLoadingScreen(video) {
  video.parentNode.firstElementChild.remove();
  video.play();
}

function showLandingPage() {
  if (disableIntroVid) return;
  var introVid = document.getElementById("introVid");

  function vanishVid() {
    introVid.style.opacity = "0";
    introVid.style.zIndex = "-1";
    disableIntroVid = true;
  }
  introVid.style.opacity = 0;
  setTimeout(vanishVid, 1000);

  var danteContainer = document.getElementById("dante-container");
  var neroContainerChild = document.getElementById("nero-container-child");
  var navBar = document.getElementsByClassName("nav-bar")[0];
  danteContainer.style.left = "0";
  neroContainerChild.style.right = "-50vw";
  navBar.style.top = 0;
  setTimeout(function () {
    navBar.style.opacity = 0.3;
  }, 1000);
}

function scrollToDiv(id) {
  document.getElementById(id).scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
  // console.log(id);
  // window.scroll({
  //   top: document.getElementById(id).offsetTop, 
  //   left: 0, 
  //   behavior: 'smooth' 
  // });
}

var halfsHovered = false;

function hoverHalfs() {
  halfsHovered = !halfsHovered;
}

function changeHalfsSizes(mousePositionX) {
  if (screen.width <= 1024 || !disableIntroVid) return;
  var currentMouseVerticalPos = mousePositionX;
  var totalWidth = screen.width;
  var danteContainer = document.getElementById("dante-container");
  var neroContainer = document.getElementById("nero-container");
  var neroContainerChild = document.getElementById("nero-container-child");
  var currentRatio = currentMouseVerticalPos / totalWidth;
  // console.log(currentRatio);
  if (currentRatio < 0.1) currentRatio = 0;
  if (currentRatio > 0.9) currentRatio = 1;
  if (currentRatio > 0.5) {
    neroContainerChild.style.right = "-" + (1 - (currentRatio - 0.5) * 2) * 50 + "vw";
    neroContainer.style.zIndex = 2;
    danteContainer.style.zIndex = 1;
    danteContainer.style.opacity = (1 - currentRatio) * 2;
    var tempArr = neroContainerChild.getElementsByTagName("*");
    for (var i = 0; i < tempArr.length; i++) {
      tempArr[i].style.right = (1 - (currentRatio - 0.5) * 2) * 50 + "vw";
    }
  } else {
    danteContainer.style.width = (1 - currentRatio) * 100 + "vw";
    danteContainer.style.zIndex = 2;
    neroContainer.style.zIndex = 1;
    neroContainer.style.opacity = currentRatio * 2;
  }
}
(function () {
  document.onmousemove = handleMouseMove;

  function handleMouseMove(event) {
    if (!halfsHovered) return;
    var eventDoc, doc, body;

    event = event || window.event; // IE-ism

    // If pageX/Y aren't available and clientX/Y are,
    // calculate pageX/Y - logic taken from jQuery.
    // (This is to support old IE)
    if (event.pageX == null && event.clientX != null) {
      eventDoc = (event.target && event.target.ownerDocument) || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;

      event.pageX = event.clientX +
        (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
        (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = event.clientY +
        (doc && doc.scrollTop || body && body.scrollTop || 0) -
        (doc && doc.clientTop || body && body.clientTop || 0);
    }

    // Use event.pageX / event.pageY here
    // console.log(event.pageX, event.pageY);
    changeHalfsSizes(event.pageX, event.pageY);
  }
})();

function resetDefaultHalfsSizes() {
  if (screen.width <= 1024 || !disableIntroVid) return;
  halfsHovered = false;
  var danteContainer = document.getElementById("dante-container");
  var neroContainer = document.getElementById("nero-container");
  var neroContainerChild = document.getElementById("nero-container-child");
  danteContainer.style.width = "50vw";
  neroContainerChild.style.right = "-50vw";
  var tempArr = neroContainerChild.getElementsByTagName("*");
  for (var i = 0; i < tempArr.length; i++) {
    tempArr[i].style.right = "50vw";
  }
  danteContainer.style.opacity = 1;
  neroContainer.style.opacity = 1;
}