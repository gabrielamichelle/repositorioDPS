"use strict";
/**
 * EJERCICIO 3
 */
/**
 * AFP -> 7.25%
 * renta -> 10%
 * isss -> 7.5%
 */
var Empleado = /** @class */ (function () {
    //constructor
    function Empleado(nombre, salario) {
        this._nombre = nombre;
        this._salario = salario;
        this._afp = 0.0725;
        this._renta = 0.1;
        this._isss = 0.075;
    }
    Object.defineProperty(Empleado.prototype, "nombre", {
        //getters y setters
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empleado.prototype, "salario", {
        get: function () {
            return this._salario;
        },
        set: function (salario) {
            this._salario = salario;
        },
        enumerable: false,
        configurable: true
    });
    //calculando deducciones salariales
    Empleado.prototype.calculoSueldoNeto = function () {
        var afp = this._salario * this._afp;
        var renta = this._salario * this._renta;
        var isss = this._salario * this._isss;
        var descuento = afp + renta + isss;
        var salarioNeto = this.salario - descuento;
        return salarioNeto;
    };
    return Empleado;
}());
//haciendo uso de la clase y su metodo
var empleado = new Empleado('Claudia Lars', 5000);
console.log('Salario Neto:', empleado.calculoSueldoNeto());
