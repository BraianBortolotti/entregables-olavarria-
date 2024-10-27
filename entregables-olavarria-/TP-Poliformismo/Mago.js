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
exports.Mago = void 0;
var Personaje_1 = require("./Personaje");
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nombre) {
        var _this = _super.call(this, nombre, 85, 45, "habilidades", "debilidades", 88) || this;
        _this.agilidad = _this.agilidad;
        return _this;
    }
    Mago.prototype.getfortaleza = function () {
        return this.agilidad;
    };
    Mago.prototype.atacar = function () {
        console.log("".concat(this.nombre, "lanza un poderoso hechizo!."));
    };
    Mago.prototype.defender = function () {
        console.log("".concat(this.nombre, " mediante un hechizo arma un escudo protector."));
    };
    return Mago;
}(Personaje_1.Personaje));
exports.Mago = Mago;
