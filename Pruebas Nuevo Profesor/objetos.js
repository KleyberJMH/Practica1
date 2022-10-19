function crearPersona (nombre, edad, genero){
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
} 

const persona1 = new crearPersona("Jose", 50, "M");
const persona2 = new crearPersona("Maria", 50, "F");
const persona3 = new crearPersona("Jesus", 33, "M");

