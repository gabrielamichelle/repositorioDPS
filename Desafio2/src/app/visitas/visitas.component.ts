import { Component, OnInit } from '@angular/core';
import { Visita } from '../models/visita';
import { VisitasService } from '../services/visitas.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.component.html',
  styleUrls: ['./visitas.component.css']
})
export class VisitasComponent implements OnInit {
  visita: Visita = new Visita();
  visits: Observable<Visita[]>;

  constructor(
    private visitasService: VisitasService,
    private notificacion: ToastrService
  ) { }

  ngOnInit(): void {
    this.mostrarTodo();
  }

  mostrarTodo() {
    this.visitasService.recuperarVisitas().subscribe(result => this.visits = result);
    // this.visits = this.visitasService.recuperarVisitas();
  }

  borrar(id: number) {
    if (confirm('¿Esta seguro de elimiar la visita?')) {
      this.visitasService.borrarVisita(id).subscribe(result => {
        if (result['resultado'] == 'OK') {
          this.notificacion.success('Visita Borrada', 'Operacion Exitosa!');
          this.mostrarTodo();
        }
      });
    }
  }
}
