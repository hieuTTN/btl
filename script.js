var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

async function autoPlay(){
    let numSlide = document.getElementsByClassName("mySlides").length;
    if(slideIndex <= numSlide){
      ++slideIndex;
    }
    else{
      numSlide = 1;
    }
    showDivs(slideIndex)
    setTimeout(autoPlay, 1000);
}

function stopSlide(){
  var id = window.setTimeout(function() {}, 0);

  while (id--) {
      window.clearTimeout(id);
  }
}