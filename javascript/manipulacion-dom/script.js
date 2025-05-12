//manipulacion del DOM
//nos permite interactuar con un documento,modificar su estructura,estilo y contenido

//seleccion de elementos
// por ID
let titulo = document.getElementById("titulo");
console.log(titulo.innerText);

//por clase(Query selector)
let parrafo = document.querySelector(".parrafo");

//modificacion de contenido
titulo.innerHTML = "nuevo titulo";
parrafo.textContent = "nuevo texto en el parrafo";

//eventos(addEventListener, onClick,onChange)
let boton = document.getElementById("boton");
boton.addEventListener("click", function () {
  alert("boton clikeado");
  titulo.innerHTML = "Titulo modificado";
});

