const JsonGestores = require('./jsons/gestores.json'); 
const JsonClientes = require('./jsons/clientes.json');
const JsonMensajes = require('./jsons/mensajes.json');  
const JsonTransferencias = require('./jsons/transferencias.json');

console.log("Gestores JSON");
console.log(JsonGestores);
console.log("Clientes JSON");
console.log(JsonClientes);
console.log("Mensajes JSON");
console.log(JsonMensajes);
console.log("Transferencias JSON");
console.log(JsonTransferencias);



let Gestores = [];
let Clientes = [];
let Mensajes = [];
let Transferencias = [];

JsonGestores.forEach(element => {
    Gestores.push(element);
});

JsonClientes.forEach(element => {
    Clientes.push(element);
});

JsonMensajes.forEach(element => {
    Mensajes.push(element);
});

JsonTransferencias.forEach(element => {
    Transferencias.push(element);
});


//Json a Array
console.log("Gestores en Array desde JSON")
console.log(Gestores);

console.log("Clientes en Array desde JSON")
console.log(Clientes);

console.log("Mensajes en Array desde JSON")
console.log(Mensajes);

console.log("Transferencias en Array desde JSON")
console.log(Transferencias);