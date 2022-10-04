//Ejercicio 1 (if else)
const a = 4;
const b = 4;
if (a > b) {
console.log(`a (${a}) es mayor que b (${b})`);
}
else if (a < b) {
console.log(`b (${b}) es mayor que b (${a})`);
}
else {
console.log(`b (${b}) es igual que b (${a})`);
}

//Ejercicio 2
var a1 = 4;
var b1 = 4;
var c1 = 6;
var d1 = 2;

if ((a1+b1) > (c1+d1)) {
    console.log ("La suma de a y b es mayor que c y d");
} else if ((a1+b1) < (c1+d1)) {
    console.log ("La suma de a y b es menor que c y d");
}else {
    console.log ("La suma de a y b es igual que c y d");
}


//Ejercicio 3
var angulo1 = parseInt(prompt("Ingrese Angulo 1"))
var angulo2 = parseInt(prompt("Ingrese Angulo 2"))
var angulo3 = parseInt(prompt("Ingrese Angulo 3"))

if (Number(angulo1+angulo2+angulo3) == 180)
{
    console.log("Los angulos del triangulo son correctos")
} else {
    console.log("Los angulos ingresados no permiten generar un triangulo")
}

//Ejercicio 4
var numero = Number(prompt("Ingrese un numero"))
if ((numero%2)==0)
{
    console.log("El numero " + numero + " es par")
} else{
    console.log("El numero " + numero + " es impar")
}

//Ejercicio5
// console.log("Entre los numero " + angulo1 + ", " + angulo2 + " y " + angulo3)
// console.log("El numero mayor es: " + Math.max(angulo1, angulo2, angulo3))


var array = [angulo1, angulo2, angulo3];
var mayor = 0;

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (array[i] > mayor)
    {
        mayor = array[i];
    }else{
        console.log("No Pasa nada")
    }
    
}
console.log("El numero mayor es el: " + mayor)