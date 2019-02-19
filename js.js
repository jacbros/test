/* Slideshow code taken from W3Schools: https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp */

var slideIndex = 1;
showSlides(slideIndex);

// frem og tilbage controls//
function plusSlides(n) {
    showSlides(slideIndex += n);
    
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
  var slidei;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (slidei = 0; slidei < slides.length; slidei++) {
    slides[slidei].style.display = "none";
  }
  for (slidei = 0; slidei < dots.length; slidei++) {
    dots[slidei].className = dots[slidei].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function videoKontrol(elementId, visKontroller){
	if (visKontroller === 1){
		document.getElementById(elementId).setAttribute("controls", "");
	}else{
		document.getElementById(elementId).addEventListener("click", function(){
			if(document.getElementById(elementId).paused) {
				document.getElementById(elementId).play();
			}else{
				document.getElementById(elementId).pause();
			}
		});
	}
}

function visMusikListe(elementId, mp3liste){
	for (var i=0; i<mp3liste.length; i++){
		document.getElementById(elementId).insertAdjacentHTML("afterbegin",'<p>' + mp3liste[i] + '</p><p><audio controls><source src="music/' + mp3liste[i] + '" type="audio/mpeg"></audio></p>')
	}
}

const nav = document.querySelector('#navigation');
const navTop = nav.offsetTop;

function navigation(elementId){
	
}

// Hovedprogramdel

var musikListe = [""];
var fotoListe = ["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg","image6.jpg","image2.jpg","image2.jpg",];


visMusikListe("musikliste", musikListe);

videoKontrol("koncertvideo", 0);

// startværdier

var musikStykke = [];

// slut på startværdier
