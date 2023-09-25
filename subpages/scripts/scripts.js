window.onload = function() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.body.style.zoom = "60%"; 
  }
}

function cargarPagina(pagina) {
  document.getElementById('contenido').src = pagina;
  event.preventDefault(); // Evitar que la página se recargue
}

document.addEventListener('DOMContentLoaded', function() {
  // Tu código adicional para el carrusel
  var miAudio = document.getElementById('miAudio');
  miAudio.volume = 0.3;

  miAudio.addEventListener('play', function() {
    var videoBackground = document.getElementById('videoBackground');
    videoBackground.play();
  });

  document.addEventListener('DOMContentLoaded', function() {
    var carruselImages = document.querySelectorAll('.carrusel img');
    var index = 0;
  
    function showImage(indexToShow) {
      carruselImages.forEach(function(img, i) {
        img.style.opacity = (i === indexToShow) ? 1 : 0;
      });
    }
  
    function nextImage() {
      index = (index + 1) % carruselImages.length;
      showImage(index);
    }
  
    setInterval(nextImage, 5000); // Cambia la imagen cada 5 segundos (5000 milisegundos)
  });
  