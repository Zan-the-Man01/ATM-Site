var slideIndex = 0;
var click = false;
var timer
showSlides();

// Next/previous controls
function plusSlides(n) {
  click = true;
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  click = true;
  showSlides(slideIndex = n);
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  if (!click) {slideIndex++;}
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  if (!click) {timer = setTimeout(showSlides, 6000);} // Change image every 2 seconds
  else {
    clearTimeout(timer);
    timer = setTimeout(showSlides, 6000);
  }
  dots[slideIndex-1].className += " active";
  click = false;
}
