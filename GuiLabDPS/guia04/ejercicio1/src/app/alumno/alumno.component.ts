import { Component, OnInit } from '@angular/core';

import { Alumno } from './../models/alumno.model';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent implements OnInit {

  alumnos: Alumno[] = [
    {
      id: 1,
      nombre: 'Patricio',
      apellido: 'Estrella',
      edad: 23,
      correo: 'estrellita@gmail.com',
      telefono: 75891424,
      direccion: 'Bajo una roca'
    }
  ];

  alumnoSeleccionado: Alumno = new Alumno();

  guardarDatos(): void {
    if (this.alumnoSeleccionado.id === 0) {
      this.alumnoSeleccionado.id = this.alumnos.length + 1;
      this.alumnos.push(this.alumnoSeleccionado);
    }
    this.alumnoSeleccionado = new Alumno(); // limpiamos el alumno seleccionado
  }

  mostrarDatos(alumno: Alumno): void {
    this.alumnoSeleccionado = alumno;
  }

  borrarDato(): void {
    this.alumnos = this.alumnos.filter(alumno => alumno !== this.alumnoSeleccionado);
    this.alumnoSeleccionado = new Alumno(); // limpiamos el alumno seleccionado
  }

  constructor() { }

  ngOnInit(): void {
  }

}
