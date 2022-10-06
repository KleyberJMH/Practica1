//Ejercicio 3
var angulo1 = parseInt(prompt("Ingrese Angulo 1"))
var angulo2 = parseInt(prompt("Ingrese Angulo 2"))
var angulo3 = parseInt(prompt("Ingrese Angulo 3"))

if (Number(angulo1+angulo2+angulo3) == 180)
{
    console.log("Los angulos del triangulo son correctos");
} else {
    console.log("Los angulos ingresados no permiten generar un triangulo");
}

