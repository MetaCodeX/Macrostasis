window.onload = function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      document.body.style.zoom = "60%"; 
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var videoBackground = document.getElementById('videoBackground');
    videoBackground.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
    }, false);
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var miAudio = document.getElementById('miAudio');
    miAudio.volume = 0.3; // Establece el volumen al 50% (0.0 - 1.0)
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var miAudio = document.getElementById('miAudio');
  
    document.addEventListener('click', function() {
      miAudio.play();
    });
  });