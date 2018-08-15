var slideIndex = 1;
var TempTime1, TempTime2;
showDivs(slideIndex);
carousel(TempTime1);

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1
  }
  x[slideIndex - 1].style.display = "block";
  TempTime1 = setTimeout(carousel, 2000); // Change image every 2 seconds
  clearTimeout(TempTime2);
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  clearTimeout(TempTime1);
  clearTimeout(TempTime2);
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
  TempTime2 = setTimeout(carousel, 2000);
}