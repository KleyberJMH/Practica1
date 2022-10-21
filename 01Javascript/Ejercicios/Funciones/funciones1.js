var num1 = parseInt(prompt("Ingrese valor 1"));
var num2 = parseInt(prompt("Ingrese valor 2"));

//Ejemplo funciones flecha
console.log("Ejemplos con funcion flecha ---------------------------------------")
const sumar = (a,b) => {return console.log(a+b);}
console.log("La suma de " + num1 + " y " + num2 + " es: ");
sumar(num1,num2);

const restar = (a,b) => {return console.log(a-b);}
console.log("La resta de " + num1 + " y " + num2 + " es: ");
restar(num1,num2);

const multiplicar = (a,b) => {return console.log(a*b);}
console.log("La multiplicacion de " + num1 + " y " + num2 + " es: ");
multiplicar(num1,num2);

const dividir = (a,b) => {return console.log(a/b);}
console.log("La division de " + num1 + " y " + num2 + " es: ");
dividir(num1,num2);

console.log("Ejemplos con funcion flecha simplificada ---------------------------------------")
//Ejemplo funciones flecha simplificados
const sumarsimple = (a,b) => console.log(a+b);
console.log("La suma de " + num1 + " y " + num2 + " es: ");
sumarsimple(num1,num2);

const restarsimple = (a,b) => console.log(a-b);
console.log("La resta de " + num1 + " y " + num2 + " es: ");
restarsimple(num1,num2);

const multiplicarsimple = (a,b) => console.log(a*b);
console.log("La multiplicacion de " + num1 + " y " + num2 + " es: ");
multiplicarsimple(num1,num2);

const dividirsimple = (a,b) => console.log(a/b);
console.log("La division de " + num1 + " y " + num2 + " es: ");
dividirsimple(num1,num2);




//--------------------------------------------------------------------------

// función que espera recibir un callback (función que es ejecutada posteriormente dentro del cuerpo de la función sumar)
const sumarejemplo = (a, b, callback) => callback(a + b);

const restarejemplo = (a, b, callback) => callback(a - b);

const multiplicarejemplo = (a, b, callback) => callback(a * b);

const dividirejemplo = (a, b, callback) => callback(a / b);

// declaración del callback donde se espera el resultado de la operación
const callback = (resultado) => console.log(resultado);
// invocación de la función sumar, pasando por parámetros los valores 1, 2 y el callback

console.log("Ejemplos con callback ---------------------------------------")
sumarejemplo(num1, num2, callback);
restarejemplo(num1, num2, callback);
multiplicarejemplo(num1, num2, callback);
dividirejemplo(num1, num2, callback);

console.log("Ejemplos con setTimeout ---------------------------------------")

setTimeout(() => { console.log('Hola'); setTimeout(() => { console.log('Adiós');}, 500);
    }, 1000)
    setTimeout(() => {
    console.log('Buenas tardes');
    }, 100)
    console.log('Buenos días');
