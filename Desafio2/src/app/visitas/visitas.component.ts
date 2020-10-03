import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Visita } from '../models/visita';
import { VisitasService } from '../services/visitas.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
// import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.component.html',
  styleUrls: ['./visitas.component.css']
})
export class VisitasComponent implements OnInit {
  // visita: Visita = new Visita();
  // visita: Visita;
  visits: Observable<Visita[]>;

  constructor(
    private route: ActivatedRoute,
    private visitasService: VisitasService,
    private notificacion: ToastrService
  ) { }

  ngOnInit(): void {
    this.mostrarVisitas();
  }

  mostrarVisitas() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.visitasService.recuperarVisitas(id).subscribe(result => this.visits = result);
      // console.log(this.visitasService.recuperarVisitas(id));
    });
  }

  borrar(id: number) {
    if (confirm('¿Esta seguro de elimiar la visita?')) {
      this.visitasService.borrarVisita(id).subscribe(result => {
        if (result['resultado'] == 'OK') {
          this.notificacion.success('Visita Borrada', 'Operacion Exitosa!');
          this.mostrarVisitas();
        }
      });
    }
  }
}
