/**
 * EJERCICIO 2
 */

 //enum con los poderes
enum Powers {
    Trepar = 'Trepar',
    Fuerza = 'Fuerza',
    Agilidad = 'Agilidad',
    TelasDeAraña = 'Telas de Araña'
}

//interface
interface Spiderman {
    nombre: string;
    poderes: Powers;
}

//funcion 
function SuperHeroe(caracteristica: Spiderman) {
    console.log(`Nombre: ${caracteristica.nombre}, 
                 Poderes: ${caracteristica.poderes}`);
}

//implementando e imprimiendo las caracteristicas de spiderman
let myHero = {nombre: 'Peter Parker', poderes: Powers.Agilidad};
SuperHeroe(myHero);