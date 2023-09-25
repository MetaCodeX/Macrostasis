window.onload = function() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.body.style.zoom = "60%"; 
  }
}

function cargarPagina(pagina) {
  document.getElementById('contenido').src = pagina;
  event.preventDefault(); // Evitar que la página se recargue
}

