/* INICIO Formulario */

/*Realiza la función de mostrar el modal, así como bloquear el scroll. 
Gestiona el mensaje recibido por el usuario */

contactarAbrir = () => {
  document.getElementById("modalFormulario").style.display = "flex";
  /*document.getElementById("container-formulario").style.display="none";*/
  document.documentElement.style.overflow = "hidden";
  var nombre = document.getElementById("formNombre").value;
  var apellidos = document.getElementById("formApellidos").value;
  var telefono = document.getElementById("formTel").value;
  var email = document.getElementById("formEmail").value;

  var mensaje;

  (function formCheck() {
    if (!document.getElementById("formNombre").checkValidity()) {
      mensaje = "Introduce un nombre correcto";
      document.getElementById("mensajeFormulario").innerHTML = mensaje;
    } else if (!document.getElementById("formApellidos").checkValidity()) {
      mensaje = "Introduce un apellido correcto";
      document.getElementById("mensajeFormulario").innerHTML = mensaje;
    } else if (!document.getElementById("formTel").checkValidity()) {
      mensaje = "Introduce un télefono correcto";
      document.getElementById("mensajeFormulario").innerHTML = mensaje;
    } else if (!document.getElementById("formEmail").checkValidity()) {
      mensaje = "Introduce e-mail correcto";
      document.getElementById("mensajeFormulario").innerHTML = mensaje;
    } else {
      mensaje =
        "Hola " +
        nombre +
        "<br>Contactaremos en tu teléfono " +
        telefono +
        "<br>Gracias por tu confianza";
      document.getElementById("mensajeFormulario").innerHTML = mensaje;
    }
  })();
};

/*Realiza la función de ocultar el modal, desbloquea el scroll. 
Reinicia los campos del formulario */

contactarCerrar = () => {
  document.getElementById("modalFormulario").style.display = "none";
  document.documentElement.style.overflow = "auto";

  var nombre = (document.getElementById("formNombre").value = "");
  var apellidos = (document.getElementById("formApellidos").value = "");
  var telefono = (document.getElementById("formTel").value = "");
  var email = (document.getElementById("formEmail").value = "");
};

/* FIN Formulario */
