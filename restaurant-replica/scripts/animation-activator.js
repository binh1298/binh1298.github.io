// get y-coordinate

revealAnimationHeaderSignature();

window.onscroll = function(){
    // for revealing animation
    var elements = document.getElementsByClassName("reveal-animation");
    var tempTop;
    for(var i=0; i < elements.length; i++) {
        tempTop = getOffset(elements[i]).top;
        if (tempTop < window.pageYOffset + screen.height - 100) revealAnimation(elements[i]);
    }
    elements = document.getElementsByClassName("sticky-bar");
    for(var i=0; i < elements.length; i++) {
        tempTop = getOffset(elements[i]).top;
        if (window.pageYOffset!=0)
        {
            revealStickyBar(elements[i]);
        }
        else 
        {
            hideStickyBar(elements[i]);
        }
    }
}

function revealAnimation(element) {
    console.log('Called revealAnimation');
    element.classList.add("slide-in-from-bottom");
}
function revealAnimationHeaderSignature() {
    var elements = document.getElementsByClassName("header-signature");
    revealAnimation(elements[0]);
}

function revealStickyBar(elements){
    console.log('Called reveal Sticky bar');
    elements.classList.remove("display-none");
}
function hideStickyBar(elements) {
    console.log('Called hide Sticky bar');
    elements.classList.add("display-none");
}


function getOffset(element){
	element = element.getBoundingClientRect();
	return {
    	left: element.left + window.scrollX,
    	top: element.top + window.scrollY
  	}
}