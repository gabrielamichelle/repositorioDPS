"use strict";
/**
 * EJERCICIO 4
 */
var Calculadora = /** @class */ (function () {
    //constructor
    function Calculadora(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    //metodos 
    Calculadora.prototype.Suma = function () {
        return this.numero1 + this.numero2;
    };
    Calculadora.prototype.Resta = function () {
        return this.numero1 - this.numero2;
    };
    Calculadora.prototype.Multiplicacion = function () {
        return this.numero1 * this.numero2;
    };
    Calculadora.prototype.Division = function () {
        if (this.numero2 == 0) {
            var message = 'No se puede dividir entre cero';
            return message;
        }
        else {
            return this.numero1 / this.numero2;
        }
    };
    return Calculadora;
}());
//haciendo uso de la clase y su metodo
var calculadora = new Calculadora(10, 0);
console.log("Operaciones:\n            Suma: " + calculadora.Suma() + ",\n            Resta: " + calculadora.Resta() + ",\n            Multiplicacion: " + calculadora.Multiplicacion() + ",\n            Division: " + calculadora.Division());
