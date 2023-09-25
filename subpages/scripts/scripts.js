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

  var carruselImages = document.querySelectorAll('.carrusel img');
  carruselImages.forEach(function(img, index) {
    if (index !== carruselImages.length - 1) {
      img.addEventListener('animationiteration', function() {
        carruselImages[index + 1].style.opacity = 1;
      });
    }
  });
});

document.addEventListener('click', function() {
  var miAudio = document.getElementById('miAudio');
  miAudio.play();
});
