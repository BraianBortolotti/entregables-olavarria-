"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Guerrero_1 = require("./Guerrero");
var Mago_1 = require("./Mago");
var Enano_1 = require("./Enano");
function crearPersonajes() {
    var personajes = [];
    console.log("{_-LA BATALLA HA COMENZADO-_}");
    // Nombres
    var guerreroNombre = 'Guerrero de Acero';
    var magoNombre = 'Mago Sabio';
    var enanoNombre = 'Enano Fuerte';
    personajes.push(new Guerrero_1.Guerrero(guerreroNombre, 2, 88, "Rapidez", "Resistencia", 96));
    personajes.push(new Mago_1.Mago(magoNombre));
    personajes.push(new Enano_1.Enano(enanoNombre));
    return personajes;
}
/*
function simularAtaques(personaje:Personaje[]):void {
    personaje.forEach(personaje =>{
        personaje.atacar();
    });
    
}
*/
var personajes = crearPersonajes();
//simularAtaques(personajes);
console.log(personajes);
