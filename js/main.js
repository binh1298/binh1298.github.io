var currentSliderPos = 0;
var scrolling = false;
var oldSliderTranslateY = 0;
// Setup slider position indicator
function setupSliderPositionIndicator()
{
  var indicatorContainer = document.getElementById("slide-pos-indicator-container");
  var slider = document.getElementById("projects-slider");
  for(var i = 0; i <= slider.children.length - indicatorContainer.children.length; i++)
  {
    var cloneNode = indicatorContainer.lastElementChild.cloneNode(true);
    indicatorContainer.appendChild(cloneNode);
  }
}

// Change indicator color
function updateSliderPositionIndicator()
{
  var indicatorContainer = document.getElementById("slide-pos-indicator-container");
  for(var i = 0; i < indicatorContainer.children.length; i++)
  {
    if(i == currentSliderPos) 
    {
      indicatorContainer.children[i].id = "current-indicator";
    }
    else indicatorContainer.children[i].id = "";
  }
}

function setupPageNumber()
{
  var pageNumContainer = document.getElementById("page-num-container");
  pageNumContainer.firstElementChild.innerHTML = currentSliderPos + 1;
  pageNumContainer.lastElementChild.innerHTML = " / " + document.getElementById("projects-slider").childElementCount;
}

function updatePageNumber()
{
  var pageNumContainer = document.getElementById("page-num-container");
  pageNumContainer.firstElementChild.style.opacity = "0";
  setTimeout(function(){
    pageNumContainer.firstElementChild.innerHTML = currentSliderPos + 1;
    pageNumContainer.firstElementChild.style.opacity = "1";
  }, 300);
}

// Scroll with buttons
function moveProjectSlider(direction)
{
  var slider = document.getElementById("projects-slider");
  slider.style.transition = "0.6s transform ease-out";
  if(direction > 1) direction = 1;
  if(direction < -1) direction = -1;
  var projectCount = slider.children.length;
  currentSliderPos = currentSliderPos + direction;
  // console.log(currentSliderPos);
  if((currentSliderPos >= 0) && currentSliderPos < projectCount) updatePageNumber();
  if((currentSliderPos <= 0))
  {
    currentSliderPos = 0;
  }
  if((currentSliderPos >= projectCount))
  {
    currentSliderPos = projectCount - 1;
  }
  oldSliderTranslateY = (-100 * currentSliderPos);
  slider.style.transform = "translateY(" + oldSliderTranslateY + "vh)";
  // console.log("translateY(" + oldSliderTranslateY + "vh)");
  updateSliderPositionIndicator();
}

// Scroll with mouse wheel
window.addEventListener('wheel', function(e) {
  if(scrolling) return;
  scrolling = true;
  if (e.deltaY < 0) {
    moveProjectSlider(-1);
  }
  if (e.deltaY > 0) {
    moveProjectSlider(1);
  }
  setTimeout(function(){
    scrolling = false;
  }, 1000);
});

function pxTOvh(value) {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
  var result = (100*value)/y;
  return result;
}
function dragover_handler(ev) {
  ev.preventDefault();
  // Set the dropEffect to move
  ev.dataTransfer.dropEffect = "move"
 }