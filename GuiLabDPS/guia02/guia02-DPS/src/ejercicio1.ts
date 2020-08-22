/**
 * EJERCICIO 1
 */

class Rombo {
    //propiedades
    DiagonalVertical: number;
    DiagonalHorizontal: number;

    //constructor
    constructor(DiagonalVertical: number, DiagonalHorizontal: number) {
        this.DiagonalVertical = DiagonalVertical;
        this.DiagonalHorizontal = DiagonalHorizontal;
    }

    //calcular el area del rombo
    areaRombo() {
        let area = this.DiagonalVertical * this.DiagonalHorizontal;
        return area;
    }
}

let rombo = new Rombo(12, 14);
let area = rombo.areaRombo();
console.log(`Area del Rombo: ${area}`);

