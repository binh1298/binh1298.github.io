var currentSliderPos = 0;
var scrolling = false;
// Scroll with buttons
function moveProjectSlider(direction)
{
  var slider = document.getElementById("projects-slider");
  var projectCount = slider.children.length;
  if((currentSliderPos + direction < 0) || (currentSliderPos + direction == projectCount)) return;
  currentSliderPos = currentSliderPos + direction;
  slider.style.transform = "translateY(" + (-100 * currentSliderPos) + "vh)";
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