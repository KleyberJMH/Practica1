// Ejercicio 8 (Se salto el 7 porque no se entiende)
const JsonGestores = require('./jsons/gestores.json'); 

function repetirCada5Segundo() {
  setInterval(mostrarGestores, 5000);
}

function mostrarGestores() {
    console.log("Lista de gestores")
    console.log(JsonGestores);
}

repetirCada5Segundo();