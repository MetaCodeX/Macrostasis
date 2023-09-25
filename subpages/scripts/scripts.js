window.onload = function() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.body.style.zoom = "60%"; 
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var carruselImages = document.querySelectorAll('.carrusel img');
  var index = 0;

  function showImage(indexToShow) {
    carruselImages.forEach(function(img, i) {
      img.style.opacity = (i === indexToShow) ? 1 : 0;
    });
  }
  
function nextImage() {
  index = (index + 1) >= carruselImages.length ? 0 : index + 1;
  showImage(index);
}
