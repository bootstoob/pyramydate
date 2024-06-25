const usuarios = [
    ["usuario1", "cont1"],
    ["usuario2", "cont2"],
    ["usuario3", "cont3"],
];

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const contrasenya = document.getElementById('contrasenya').value;
    var cancelarBtn = document.getElementById('cancelarBtn');

    if (usuarios.some(u => u[0] === usuario && u[1] === contrasenya)) {
        cancelarBtn.click();
        alert("Has iniciado sesión correctamente");
    } else {
        alert("El usuario no existe, prueba con:\n" + usuarios);
    }
});

function cambiarColor(btn) {
    setTimeout(function () { btn.style.backgroundColor = 'orange'; }, 0);
}


$(document).ready(function(){
    var progressBar = $('.progress-bar');
    var width = 0;
    var interval = setInterval(function(){
      width += 5; 
      progressBar.css('width', width + '%').attr('aria-valuenow', width);

      if(width >= 100){
        clearInterval(interval);
      }
    }, 500); 
  });


  document.getElementById('nav-titulo').addEventListener('click', function() {
    window.location.href = './index.html';
  });