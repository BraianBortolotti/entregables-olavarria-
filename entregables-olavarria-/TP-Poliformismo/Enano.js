"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enano = void 0;
var Personaje_1 = require("./Personaje");
var Enano = /** @class */ (function (_super) {
    __extends(Enano, _super);
    function Enano(nombre) {
        var _this = _super.call(this, nombre, 80, 55, "habilidades", "debilidades", 75) || this;
        _this.energia = _this.energia;
        return _this;
    }
    Enano.prototype.getfortaleza = function () {
        return this.energia;
    };
    Enano.prototype.atacar = function () {
        console.log("".concat(this.nombre, "lanza un golpe con su espada."));
    };
    Enano.prototype.defender = function () {
        console.log("".concat(this.nombre, "se proteje a traves de su escudo de madera."));
    };
    return Enano;
}(Personaje_1.Personaje));
exports.Enano = Enano;
