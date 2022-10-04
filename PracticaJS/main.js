// Ejercicio 1
var a = 1, b = 2, c = 3;
//Ejercicio 1.1
console.log("a + b + c = 1 + 2 + 3 = 6")
console.log (a+b+c);
//Ejercicio 1.2
console.log("Se cambia el valor de C a 5")
c = 5;
//Ejercicio 1.3
console.log("a + b + c = 1 + 2 + 5 = 8")
console.log (a+b+c);

//Ejercicio 2.1
document.getElementById("ejemplo1").innerHTML = "Hello world";
//Ejercicio 2.2
document.getElementById("ejemplo2").innerHTML = "2*3";
//Ejercicio 2.3
document.getElementById("ejemplo3").innerHTML = (2*3);


//Ejercicio 3
console.log("------------------------------------------------")
var number = 100;
var string = "2022";
var bool = true;

var Number_String;
var String_Number;
var Boolean_String;
//Ejercicio 3.1 (STR a NMB)
String_Number = Number(string);
console.log(String_Number)
console.log(typeof(String_Number));

//Ejercicio 3.2 (NMB a STR)
Number_String = number.toString();
console.log(Number_String);
console.log(typeof(Number_String));

//Ejercicio 3.3 (BOL a STR)
Boolean_String = bool.toString();
console.log(Boolean_String);
console.log(typeof(Boolean_String));

