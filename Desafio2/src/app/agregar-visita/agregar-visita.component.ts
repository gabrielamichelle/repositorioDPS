import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; // import router from angular router
import { Visita } from '../models/visita';
import { VisitasService } from '../services/visitas.service';
// import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-agregar-visita',
  templateUrl: './agregar-visita.component.html',
  styleUrls: ['./agregar-visita.component.css']
})
export class AgregarVisitaComponent implements OnInit {
  visita: Visita = new Visita();
  // visits: Observable<Visita[]>;

  constructor(
    private visitasService: VisitasService,
    private notificacion: ToastrService,
    private route:Router
  ) { }

  ngOnInit(): void {
  }

  agregar(data: Visita) {
    this.visitasService.agregarVisita(data).subscribe((result) => {
      if (result['resultado'] == 'OK') {
        this.notificacion.success('Visita creada', 'Operacion Exitosa!');
        this.route.navigate(['/visitas']);
      }
    });
  }
}
