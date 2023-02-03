"use strict";
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    //metodo
    getNombre() {
        return this.nombre;
    }
    //metodo statico
    static metodoEstatico() {
        return 10;
    }
}
let persona1 = new Persona('Juan');
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());
