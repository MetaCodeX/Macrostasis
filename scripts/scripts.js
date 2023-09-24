window.onload = function() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.body.style.zoom = "60%"; 
  }
}

function cargarPagina(pagina) {
  document.getElementById('contenido').src = pagina;
  event.preventDefault(); // Evitar que la página se recargue
}

/*<!--Modificar desde aqui hasta arriba, todo esta perfecto apartir de aqui, con amor... yo <3-->*/


document.addEventListener('DOMContentLoaded', function() {
  var videoBackground = document.getElementById('videoBackground');
  videoBackground.addEventListener('canplaythrough', function() {
      this.play(); // Inicia el video cuando está listo
      this.style.opacity = 1; // Cambia la opacidad para mostrar el video gradualmente
  }, false);

  videoBackground.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
  }, false);
});

document.addEventListener('DOMContentLoaded', function() {
  var videoBackground = document.getElementById('videoBackground');

  function toggleVideoVisibility() {
    videoBackground.style.opacity = (videoBackground.style.opacity === '0') ? '1' : '0';
    setTimeout(toggleVideoVisibility, 5000); // Cambia '5000' a la cantidad de milisegundos que desees (en este caso, 5000 ms = 5 segundos)
  }

  toggleVideoVisibility(); // Inicia el ciclo de desvanecimiento
});


document.addEventListener('DOMContentLoaded', function() {
  var miAudio = document.getElementById('miAudio');
  miAudio.volume = 0.3; // Establece el volumen al 30% (0.0 - 1.0)
});

document.addEventListener('click', function() {
  var miAudio = document.getElementById('miAudio');
  miAudio.play();
});
