//Ejercicio 11
var numero = parseInt(prompt("Ingrese un numero entero positivo"))
var regresiva = [];

for (let index = numero; index >= 0; index--) {
    regresiva[index] = index;
    
}

var regresivaString = String(regresiva.reverse());
document.write(regresivaString);