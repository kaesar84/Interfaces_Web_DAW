/* MENU INICIO */

/*Oculta el menu en base del scroll */

var posInicioScroll = document.documentElement.scrollTop;
var posFinalScroll = document.documentElement.scrollTop;

window.onscroll = function () {
  estadoMenu();
};

function estadoMenu() {
  var posActualScroll = document.documentElement.scrollTop;

  if (posInicioScroll > posActualScroll) {
    // subiendo pantalla - muestra menu
    //document.getElementById("menu").style.display="flex";
    document.getElementById("menuBar").style.top = "0";
  } else {
    //bajando - oculta menu
    // document.getElementById("menu").style.display="none";
    document.getElementById("menuBar").style.top = "-200px";
  }
  posInicioScroll = posActualScroll;
}

/* LIGHT */

var listaRutaImgGal = [];
var numeroImg = 0;

comeToLight = () => {
  var listaImgGal = document.getElementsByClassName("img_gal");

  for (var i = 0; i < listaImgGal.length; i++) {
    listaRutaImgGal.push(listaImgGal[i].src);
  }

  for (var i = 0; i < listaImgGal.length; i++) {
    listaImgGal[i].addEventListener("click", openLight);
  }

  function openLight() {
    var rutaImgClik = event.currentTarget.src;
    //console.log(rutaImgClik);

    var numeroImg = listaRutaImgGal.indexOf(rutaImgClik);
    //console.log(numeroImg)

    document.getElementById("imagenMostrada").innerHTML =
      "<img class='imgLight' src=" + listaRutaImgGal[numeroImg] + "></img>";

    document.getElementById("modalLightBox").style.display = "flex";
    document.documentElement.style.overflow = "hidden";
    closeLight();
  }

  function closeLight() {
    window.addEventListener("click", function (event) {
      // Localizamos la ubicación del clic - matches
      // cuando no sean las clases determinadas se cerrará
      if (
        !event.target.matches(".imgLight") &&
        !event.target.matches(".img_gal") &&
        !event.target.matches("#imagenMostrada") &&
        !event.target.matches(".botonLB") &&
        !event.target.matches(".material-symbols-outlined")
      ) {
       
        document.getElementById("modalLightBox").style.display = "none";
        document.documentElement.style.overflow = "auto";
      }
    });
  }
};

nextImg = () => {
  numeroImg++;

  if (numeroImg == listaRutaImgGal.length) {
    numeroImg = 0;
  }

  document.getElementById("imagenMostrada").innerHTML =
    "<img class='imgLight' src=" + listaRutaImgGal[numeroImg] + "></img>";
};

retroImg = () => {
  numeroImg--;

  if (numeroImg < 0) {
    numeroImg = listaRutaImgGal.length - 1;
  }

  document.getElementById("imagenMostrada").innerHTML =
    "<img class='imgLight' src=" + listaRutaImgGal[numeroImg] + "></img>";
};

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
      document.getElementById("modalBoxF").style.width = "30%";
      document.getElementById("modalBoxF").style.height = "30%";

      mensaje =
        "Hola " +
        nombre +
        ",<br>contactaremos en tu teléfono " +
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
