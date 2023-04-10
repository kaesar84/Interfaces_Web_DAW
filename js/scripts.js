// ********************************************* //
//MENU INICIO
// ********************************************* //
//Oculta el menu en base del scroll

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

// ********************************************* //
//SLIDE SHOW IMAGE HERO
// ********************************************* //
//Cambiará la imagend e fondo de manera automática

var contador = 0;

heroSlideShow = () => {
  var listaBackgrounds = [
    " linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/media/imagenes/header/Hero1.jpg')",
    " linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/media/imagenes/header/Hero2.jpg')",
    " linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/media/imagenes/header/Hero3.jpg')",
  ];

  contador++;

  if (contador > listaBackgrounds.length - 1) {
    contador = 0;
  }

  document.getElementById("cabecera").style.backgroundImage =
    listaBackgrounds[contador];
};

//Cambiará la imagend e fondo de manera automática con animacion

var contadorNext = 0;
var contadorMain = 0;

heroSlideShowAnim = () => {
  var listaBackgroundsAnim = document.getElementsByClassName("fondosHero");

  contadorNext++;
  contadorMain = contadorNext - 1;

  if (contadorNext == listaBackgroundsAnim.length) {
    contadorNext = 0;
  }
  if (contadorMain < 0) {
    contadorMain == listaBackgroundsAnim.length - 1;
  }

  for (var i = 0; i < listaBackgroundsAnim.length; i++) {
    // console.log(listaBackgroundsAnim[i]);
    listaBackgroundsAnim[i].classList.remove("heroSiguiente");
    listaBackgroundsAnim[i].classList.remove("heroMostrada");
    listaBackgroundsAnim[i].classList.remove("heroOculta");

    if (i == contadorNext) {
      listaBackgroundsAnim[i].classList.add("heroSiguiente");
    } else if (i == contadorMain) {
      listaBackgroundsAnim[i].classList.add("heroMostrada"); //sale de pantalla
    } else {
      listaBackgroundsAnim[i].classList.add("heroOculta"); //display none
    }
  }
};

// ********************************************* //
// LIGHTBOX
// ********************************************* //
// muestra imagen ampliada al seleccionarla

var listaRutaImgGal = [];
var numeroImg = 0;

//Obtendremos la ruta de la imagen seleccionada, para su posterior ampliación
comeToLight = () => {
  // Creamos array con los elementos de la clase img_gal
  var listaImgGal = document.getElementsByClassName("img_gal");

  // Recorremos array e rellenamos listaRutaImgGal con los elementos src
  for (var i = 0; i < listaImgGal.length; i++) {
    listaRutaImgGal.push(listaImgGal[i].src);
  }
  // Iniciamos listener recorriendo la listaImgGal -> abrirá la función openLight
  for (var i = 0; i < listaImgGal.length; i++) {
    listaImgGal[i].addEventListener("click", openLight);
  }

  /* Realizará la obertura del modal, incorporará contenido html de la imagen
 teniendo en cuenta su posición en el array. Bloquea también la barra de scroll
*/
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

  //Cerramos el modal, condicionando su cierre al click en una posición determinada
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

// Cambio de ruta de las imágenes a mostrar
//imagen siguiente
nextImg = () => {
  numeroImg++;
  if (numeroImg == listaRutaImgGal.length) {
    // aplicamos reinicio al llegar a la última imagen
    numeroImg = 0;
  }

  document.getElementById("imagenMostrada").innerHTML =
    "<img class='imgLight' src=" + listaRutaImgGal[numeroImg] + "></img>";
};

//imagen anterior
retroImg = () => {
  numeroImg--;

  if (numeroImg < 0) {
    // aplicamos reinicio a la primera imagen
    numeroImg = listaRutaImgGal.length - 1;
  }

  document.getElementById("imagenMostrada").innerHTML =
    "<img class='imgLight' src=" + listaRutaImgGal[numeroImg] + "></img>";
};

// ********************************************* //
// PESTAÑAS
// ********************************************* //
//Aplica contenido en base a selección

selectPest = (pestMostrar, pestClick) => {
  /*Creamos un array con los elementos de la clase contanier_actividades */
  var listaPest = document.getElementsByClassName("container_actividades");

  /*Recorremos el array aplicando propiedad para ocultarlos */
  for (var i = 0; i < listaPest.length; i++) {
    listaPest[i].style.display = "none";
  }

  /* pesMostrar -> será un string con el que identificaremos la id del elemento
  localizado en la lista, será el elemento de la clase container_actividades y con id "X"
  lo mostraremos*/

  document.getElementById(pestMostrar).style.display = "flex";

  var tabLinks = document.getElementsByClassName("pestanasP");

  for (var i = 0; i < tabLinks.length; i++) {
    // console.log(tabLinks[i]);
    tabLinks[i].classList.remove("pestanasPActiva");
    tabLinks[i].classList.remove("pestanasActivaRefresh");
  }
  document.getElementById(pestClick).classList.add("pestanasPActiva");
};

// ********************************************* //
/* FORMULARIO*/
// ********************************************* //

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

  //valida contenido formulario
  (function formCheck() {
    if (!document.getElementById("formNombre").checkValidity()) {
      mensaje =
        "<span class='estiloTextomodal'>Uups!</span> <br>Introduce un nombre correcto";
      document.getElementById("mensajeFormulario").innerHTML = mensaje;
    } else if (!document.getElementById("formApellidos").checkValidity()) {
      mensaje =
        "<span class='estiloTextomodal'>Uups!</span> <br>Introduce los apellido correctos";
      document.getElementById("mensajeFormulario").innerHTML = mensaje;
    } else if (!document.getElementById("formTel").checkValidity()) {
      mensaje =
        "<span class='estiloTextomodal'>Uups!</span> <br>Introduce un télefono correcto";
      document.getElementById("mensajeFormulario").innerHTML = mensaje;
    } else if (!document.getElementById("formEmail").checkValidity()) {
      mensaje =
        "<span class='estiloTextomodal'>Uups!</span> <br>Introduce e-mail correcto";
      document.getElementById("mensajeFormulario").innerHTML = mensaje;
    } else {
      document.getElementById("modalBoxF").style.width = "30%";
      document.getElementById("modalBoxF").style.height = "30%";

      mensaje =
        "<span class='estiloTextomodal'>Hola " +
        nombre +
        "</span>" +
        "<br>En breve nos podremos en contacto<br> Télefono: " +
        "<span class='estiloTextomodal'>" +
        telefono +
        "</span>" +
        ("<br>E-mail: " +
          "<span class='estiloTextomodal'>" +
          email +
          "</span>");

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


// ********************************************* //
//ACORDEON
// ********************************************* //
//Desplegable de contenido

function desplegar(event) {
  var activar = event.currentTarget;
  var acordeonBodyS = document.getElementsByClassName('acordeon-body');
  var acordeonHeaderS = document.getElementsByClassName('acordeon-header');
  
  for (var i = 0; i < acordeonHeaderS.length; i++) {
    var acordeonHeader = acordeonHeaderS[i];
    var acordeonBody = acordeonBodyS[i];
    
    if (acordeonHeader === activar) {
      if (acordeonBody.style.display === 'flex') {
        acordeonBody.style.display = 'none';
        
      } else {
        acordeonBody.style.display = 'flex';
        activar.classList.add('active');
      }
    } 
  }
}



// ********************************************* //
// TOOLTIP
// ********************************************* //
// Muestra tooltip al posicionar el mouse sobre elementos

activarTooltip = () =>{
  // Lista de elementos clase tooltip-container
  var tooltips = document.getElementsByClassName('tooltip-container');
  //Lista de elementos clase tooltip-mostrar
  var tooltipMostrar = document.getElementsByClassName('tooltip-mostrar');
  //Lista de elementos clase tooltip-contenido
  var tooltipContenido = document.getElementsByClassName('tooltip-contenido');

  /*Recorremos los elementos que son de la clase tooltip-container y buscamos los elementos
   de clase tooltip-mostrar y tooltip-contenido y rellenamos nueva lista, se crea la 
   correspondencia a través de los indices, ya que son iguales:
   container[0] - mostrar[0] - contenido[0]*/
  for (let i = 0; i < tooltips.length; i++) {
    var tooltipMostrarS = document.getElementsByClassName('tooltip-mostrar');
    console.log(tooltipMostrarS);
    var tooltipContenidoS = document.getElementsByClassName('tooltip-contenido');
  console.log(tooltipContenidoS);

  /*Establecemos listeners en cada elemento ya indexado, cuando el ratón este posicionado
  encima se hará visible */
    tooltipMostrarS.addEventListener('mouseover', () => {
      tooltipContenidoS.style.opacity = '1';
      tooltipContenidoS.style.visibility = 'visible';
    });
  
    // con ratón fuera se oculta
    tooltipMostrarS.addEventListener('mouseout', () => {
      tooltipContenidoS.style.opacity = '0';
      tooltipContenidoS.style.visibility = 'hidden';
    });
  }
}

// ********************************************* //
// FILTRO
// ********************************************* //
// Aplica filtro por categorías, no duplica contenido

function filterImages(category) {
  const imagenesFiltro = document.getElementsByClassName('imgfiltro');
  
  for (let i = 0; i < imagenesFiltro.length; i++) {
    const imagenesFiltroS = imagenesFiltro[i];
   
    if (category === 'todos') {
      imagenesFiltroS.style.display = 'flex';
    } else if (imagenesFiltroS.classList.contains(category)) {
      imagenesFiltroS.style.display = 'flex';
    } else {
      imagenesFiltroS.style.display = 'none';
    }
  }
}

// aplica estilo a botones del filtro, determinando clases para estilo
function clicado(button) {
  // Desactivar cualquier otro botón que ya esté activo
  var botones = document.getElementsByClassName('btn-filtro');
  
  for (var i = 0; i < botones.length; i++) {
      botones[i].classList.remove('btn-filtro-click');
      botones[i].classList.remove('btn-first');
  }
  // Activar el botón actual
  button.classList.add('btn-filtro-click');
}
