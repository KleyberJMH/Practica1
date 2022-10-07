var Gestor = {
    name : "",
    user : "",
    password : ""
};

var Client = {
    name : "",
    user : "",
    password : ""
};

var Mensaje = {
    sender : "",
    msg : ""
};

var Transferencia = {
    sender : "",
    reciver : "",
    amount : ""
};

var mensajes = [];

function crearGestor() {
    var name = prompt("Nombre del gestor");
    var user = prompt("Usuario del gestor");
    var password = prompt("Contraseña de gestor");
    
    Gestor.name = name;
    Gestor.user = user;
    Gestor.password = password;

    console.log(Gestor);
};


function crearCliente() {
    var name = prompt("Nombre del cliente");
    var user = prompt("Usuario del cliente");
    var password = prompt("Contraseña de cliente");
    
    Client.name = name;
    Client.user = user;
    Client.password = password;

    console.log(Client);
};

function enviarMensaje() {
    var sender = prompt("Ingrese su nombre");
    var msg = prompt("Escriba el mensaje");
    
    Mensaje.sender = sender;
    Mensaje.msg = msg;

    mensajes.push(Mensaje);
    console.log(mensajes);
};


function enviarTransferencia() {
    var sender = prompt("Ingrese su nombre");
    var reciver = prompt("Ingrese numero de cuenta del receptor");
    var amount = prompt("Ingrese monto de transferencia"); 
    
    Transferencia.sender = sender;
    Transferencia.reciver = reciver;
    Transferencia.amount = amount;

    console.log(Transferencia);
};