//Ejercicio5
var numero1 = Number(prompt("Ingrese un numero 1"))
var numero2 = Number(prompt("Ingrese un numero 2"))
var numero3 = Number(prompt("Ingrese un numero 3"))
//Ejercicio 5 con funcion Math.max()
console.log("Entre los numero " + numero1 + ", " + numero2 + " y " + numero3)
console.log("El numero mayor es: " + Math.max(numero1, numero2, numero3))


//Ejercicio 5 con For
var array = [numero1, numero2, numero3];
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

//Ejercicio 5 con if else if
if (numero1 > numero2 && numero1 > numero3) {
    console.log("El numero mayor es: " + numero1)
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log("El numero mayor es: " + numero2)
} else {
    console.log("El numero mayor es: " + numero3)
}