"use strict";
/**
 * EJERCICIO 2
 */
//enum con los poderes
var Powers;
(function (Powers) {
    Powers["Trepar"] = "Trepar";
    Powers["Fuerza"] = "Fuerza";
    Powers["Agilidad"] = "Agilidad";
    Powers["TelasDeAra\u00F1a"] = "Telas de Ara\u00F1a";
})(Powers || (Powers = {}));
//funcion 
function SuperHeroe(caracteristica) {
    console.log("Nombre: " + caracteristica.nombre + ", \n                 Poderes: " + caracteristica.poderes);
}
//implementando e imprimiendo las caracteristicas de spiderman
var myHero = { nombre: 'Peter Parker', poderes: Powers.Agilidad };
SuperHeroe(myHero);
