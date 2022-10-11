//Ejercicio 4
var Gestor1 = {
    name : "Gestor1",
    user : "usuarioG1",
    password : "passG1"
};

var Client1 = {
    name : "Cliente1",
    user : "usuarioC1",
    password : "passC1"
};

var Mensaje1 = {
    sender : "Remitente1",
    msg : "Mensaje ejemplo1"
};

var Transferencia1 = {
    sender : "RemitenteT1",
    reciver : "ReceptorT1",
    amount : "100€"
};

var Gestor2 = {
    name : "Gestor2",
    user : "usuarioG2",
    password : "passG2"
};

var Client2 = {
    name : "Cliente2",
    user : "usuarioC2",
    password : "passC2"
};

var Mensaje2 = {
    sender : "Remitente2",
    msg : "Mensaje ejemplo2"
};

var Transferencia2 = {
    sender : "RemitenteT2",
    reciver : "ReceptorT2",
    amount : "200€"
};

var Gestor3 = {
    name : "Gestor3",
    user : "usuarioG3",
    password : "passG3"
};

var Client3 = {
    name : "Cliente3",
    user : "usuarioC3",
    password : "passC3"
};

var Mensaje3 = {
    sender : "Remitente3",
    msg : "Mensaje ejemplo3"
};

var Transferencia3 = {
    sender : "RemitenteT3",
    reciver : "ReceptorT3",
    amount : "300€"
};








//Ejercicio 5
let arrayGestores = [Gestor1, Gestor2, Gestor3];
let arrayClientes = [Client1, Client2, Client3];
let arrayMensajes = [Mensaje1, Mensaje2, Mensaje3];
let arrayTransferencias = [Transferencia1, Transferencia2, Transferencia3];


//Imprimir Arreglos
console.log("Arreglo Gestores");
for (const gestor of arrayGestores) {
    console.log(gestor);
}

console.log("Arreglo Clientes");
for (const cliente of arrayClientes) {
    console.log(cliente);
}

console.log("Arreglo Mensajes");
for (const mensaje of arrayMensajes) {
    console.log(mensaje);
}

console.log("Arreglo Transferencias");
for (const transferencia of arrayTransferencias) {
    console.log(transferencia);
}




const JsonGestores = JSON.stringify(arrayGestores);
console.log("Gestores en JSON");
console.log(JsonGestores);

const JsonClientes = JSON.stringify(arrayClientes);
console.log("Clientes en JSON");
console.log(JsonClientes);

const JsonMensajes = JSON.stringify(arrayMensajes);
console.log("Mensajes en JSON");
console.log(JsonMensajes);

const JsonTransferencias = JSON.stringify(arrayTransferencias);
console.log("Transferencias en JSON");
console.log(JsonTransferencias);

const fs = require('fs'); 
 
fs.writeFile('jsons/gestores.json', JsonGestores,'utf8', (err) => { 
  if (err) throw err; 
}); 

fs.writeFile('jsons/clientes.json', JsonClientes,'utf8', (err) => { 
    if (err) throw err; 
  }); 

fs.writeFile('jsons/mensajes.json', JsonMensajes,'utf8', (err) => { 
    if (err) throw err; 
  }); 

fs.writeFile('jsons/transferencias.json', JsonTransferencias,'utf8', (err) => { 
    if (err) throw err; 
  }); 