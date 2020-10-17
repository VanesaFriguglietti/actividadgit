document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();
  var usuario = document.getElementById('usuario').value;
  if(usuario.indexOf("@")==-1) {
    alert('Falta ingresar el arrova en el campo ususario');
    return;
  }
  var clave = document.getElementById('clave').value;
  if (clave.length < 1) {
    alert('No ingreso la clave');
    return;
  
  }
  this.submit();
}