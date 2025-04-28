//lenguaje de programacion client-side
//actualmente esta orientado a funciones

//variables
var miVariable = "hola soy una viariable con var"; //no se usa
let miVariable2 = "variable con let "; //solo vive  en el scope declarado
const miVariable3 = "constante con cambian los valores";

const hola = "hola pri";
console.log(hola); // es equivalente a print
//funciones
function myfuction(variable) {
  // la funcion tiene una declaracion
  //en los parentesis van los parametros
  console.log(variable);
  return variable; //en general las funciones retorna algo
}
//funcion flecha
const myArrowFuction = (variable) => variable;

//ejecucion de una funcion
myfuction(8);

const variable = true;
//condicional
if (variable) {
  console.log(true);
} else {
  console.log(false);
}

//condicional ternario sirve solo para dos clasulas
variable ? console.log(true) : console.log(false);

//arreglos o arrays
//los arreglos son las litas de python
const arr = [1, true, "hola como estas", 0, 1, 2];

console.log(`la posicion 1 del arreglo es,${arr[1]}`);

//objetos
//los objetos son como los diccionarios en python
const objeto = {
  clave: "valor",
};
//los objetos estan compuestos por clave valor
//accedemos al valor de la clave por medio del punto
console.log(objeto.clave);

//bucle for
const arrayNumeros = [1, 2, 3, "Hola"];
for (let i = 0; i < arrayNumeros.length; i++) 
{
  console.log(arrayNumeros[i]);
}


