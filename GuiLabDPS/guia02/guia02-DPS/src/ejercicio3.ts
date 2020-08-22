/**
 * EJERCICIO 3
 */

/**
 * AFP -> 7.25%
 * renta -> 10%
 * isss -> 7.5%
 */

 class Empleado {

    //propiedades
    private _nombre: string;
    private _salario: number;
    private _afp: number;
    private _renta: number;
    private _isss: number;

    //constructor
    constructor(nombre: string, salario: number) {
        this._nombre = nombre;
        this._salario = salario;
        this._afp = 0.0725;
        this._renta = 0.1;
        this._isss = 0.075;
    }

    //getters y setters
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    get salario() {
        return this._salario;
    }
    set salario(salario: number) {
        this._salario = salario;
    }


    //calculando deducciones salariales
    public calculoSueldoNeto() {
        const afp: number = this._salario * this._afp;
        const renta: number = this._salario * this._renta;
        const isss: number = this._salario * this._isss;
        const descuento: number = afp + renta + isss;
        const salarioNeto: number = this.salario - descuento;
        return salarioNeto;
    }
}

//haciendo uso de la clase y su metodo
let empleado = new Empleado('Claudia Lars', 5000);
console.log('Salario Neto:', empleado.calculoSueldoNeto());