//setTimeout() recibe por parametros una funcion y un valor numerico en milisegundos

const button = document.getElementById("boton");
button.addEventListener("click",()=>{
    setTimeout(()=>{
        alert ("fui presionado despues de 3 segundos");
    },3000);
});


//setInterval() 
//descomentar cuando vamos a usarlo

          //
/*let contador = 0;
setInterval(() => {
    contador ++;
    console.log("Contador:", contador);
}, 1000);//milisegundos
*/


//asincronia
//metodos para consumir una api
//get, post,put,delete

//fetch
//lo vamos a utilizar para conectarnos/consumir una appi
//fetch(url,opciones)
//opciones es un opcional para pasar un objeto que le diga q tipo 
//de metodo utiliza, encabezado, cuerpo, etc, 

const array = fetch("https://rickandmortyapi.com/api/character")
    .then(data => data.json())
    .then((response)=>console.log(response.results));
    
async function getCharacters(){
  try{
    const response =await fetch(("https://rickandmortyapi.com/api/character"))
    const data = await response.json();
    data.results.map((item)=>{
        console.log(item);
    });
  } catch (error){
    console.log(error);
  }   
}
getCharacters();

 

