"use strict";
/**
 * EJERCICIO 1
 */
var Rombo = /** @class */ (function () {
    //constructor
    function Rombo(DiagonalVertical, DiagonalHorizontal) {
        this.DiagonalVertical = DiagonalVertical;
        this.DiagonalHorizontal = DiagonalHorizontal;
    }
    //calcular el area del rombo
    Rombo.prototype.areaRombo = function () {
        var area = this.DiagonalVertical * this.DiagonalHorizontal;
        return area;
    };
    return Rombo;
}());
var rombo = new Rombo(12, 14);
var area = rombo.areaRombo();
console.log("Area del Rombo: " + area);
