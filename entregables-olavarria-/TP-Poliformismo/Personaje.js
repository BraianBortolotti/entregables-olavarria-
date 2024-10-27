"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    function Personaje(nombre, nivel, puntoDeVida, habilidades, debilidades, fuerza) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntoDeVida = puntoDeVida;
        this.habilidades = habilidades;
        this.debilidades = debilidades;
        this.fuerza = fuerza;
    }
    Personaje.prototype.getnombre = function () {
        return this.nombre;
    };
    Personaje.prototype.getnivel = function () {
        return this.nivel;
    };
    Personaje.prototype.getpuntoDeVida = function () {
        return this.puntoDeVida;
    };
    return Personaje;
}());
exports.Personaje = Personaje;
