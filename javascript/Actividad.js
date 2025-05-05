//1 if
let numero = 19;
if (numero > 10) {
  console.log("El numero es mayor que 10");
}

//2 if
let numero2 = 10;
let numero3 = 16;
if (numero2 > numero3) {
  console.log("El primer numero es mayor", numero2);
}
if (numero3 > numero2) {
  console.log("El segundo numero es mayor", numero3);
} else {
  console.log("ambos son iguales");
}

//1
// while
let number = 5;
let counter = 0;
while (counter <= number) {
  counter++;
  console.log(`el contador${counter}`);
}
//2
//while
let suma = 0;
let numero4 = 1;
while (numero4 <= 4) {
  suma += numero4;
  numero4++;
  console.log(suma);
}

//for
//1

for (let i = 0; i <= 4; i++) {
  console.log(i);
}

//2

let suma2 = 0;

for (let i = 0; i <= 4; i++) {
  suma2 += i;
  console.log("La suma de los números del 0 al 4 es:", suma2);
}
//console.log("La suma de los números del 0 al 4 es:", suma);


