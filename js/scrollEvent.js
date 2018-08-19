window.addEventListener('wheel', function(e) {
  if (e.deltaY < 0) {
    console.log('scrolling up');
  }
  if (e.deltaY > 0) {
    console.log('scrolling down');
  }
});