/**
 * EJERCICIO 4
 */

class Calculadora {

    //propiedades
    numero1: number;
    numero2: number;

    //constructor
    constructor(numero1: number, numero2: number) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }

    //metodos 
    public Suma() {
        return this.numero1 + this.numero2;
    }

    public Resta() {
        return this.numero1 - this.numero2;
    }

    public Multiplicacion() {
        return this.numero1 * this.numero2;
    }

    public Division() {
        if(this.numero2 == 0){
            let message: String = 'No se puede dividir entre cero';
            return message;
        }else{
            return this.numero1 / this.numero2;
        }
    }
}

//haciendo uso de la clase y su metodo
let calculadora = new Calculadora(10, 0);
console.log(`Operaciones:
            Suma: ${calculadora.Suma()},
            Resta: ${calculadora.Resta()},
            Multiplicacion: ${calculadora.Multiplicacion()},
            Division: ${calculadora.Division()}`);