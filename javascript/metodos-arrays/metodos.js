const arrayNumeros = [1,2,3,4,5,6];

//metodos

//push -> Agrega un elemento al final del arreglo(append de python)
arrayNumeros.push(16);
console.log(arrayNumeros[0]);

//pop elimina el ultimo elemento de un arreglo en una variable
const ultimo = arrayNumeros.pop();
console.log("ultimo",ultimo);
console.log(arrayNumeros);

//shift elimina el primer valor de un arreglo
const primero =arrayNumeros.shift();
console.log(primero);

//unshift(valor) agrega un elemento al principio del arreglo
arrayNumeros.unshift("Pri");
console.log(arrayNumeros);

//map(funcion) crea un nuevo arreglo aplicando una funcion a cada elemento
const nuevoArreglo = arrayNumeros.map((item) => {
    return(item +1)});
console.log(nuevoArreglo);    

//filter crea un nuevo array con los elementos que cumplan la condicion
const pares = arrayNumeros.filter((n) => n % 2 === 0);
console.log(pares);

//forEach solamente recorre un arreglo 
//podemos ver item, index y array completo
arrayNumeros.forEach((item,index,array) => console.log (item,index,array)); 