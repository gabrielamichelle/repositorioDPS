import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Router} from '@angular/router'; // import router from angular router
import { Visita } from '../models/visita';
import { Cliente } from '../models/cliente';
import { VisitasService } from '../services/visitas.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-agregar-visita',
  templateUrl: './agregar-visita.component.html',
  styleUrls: ['./agregar-visita.component.css']
})
export class AgregarVisitaComponent implements OnInit {
  visita: Visita = new Visita();
  cliente: Cliente = new Cliente();
  constructor(
    private visitasService: VisitasService,
    private notificacion: ToastrService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  agregar(data: Visita) {
    this.activatedRoute.params.subscribe((params: Params) => {
      const id = params.id;
      let visit = params.visitas;
      visit = parseInt(visit) + 1;
      data.idCliente = id;
      this.cliente.id = id;
      this.cliente.visitas = visit;
      // console.log("visitas:", this.cliente.visitas);

      if (this.cliente.visitas >= 2 && this.cliente.visitas <= 5) {
        this.visita.costo = this.visita.costo - (this.visita.costo * 0.05);
        this.visitasService.agregarVisita(data).subscribe((result) => {
          if (result['resultado'] == 'OK') {
            this.visitasService.modificarVisitas(this.cliente).subscribe(datos => {
              if (datos['resultado'] == 'OK') {
                this.notificacion.success('Visita creada, Descuento 5%', 'Operacion Exitosa!');
                this.route.navigate(['/clientes']);
              }
            });
          }
        });
      }
      if (this.cliente.visitas >= 6) {
        this.visita.costo = this.visita.costo - (this.visita.costo * 0.08);
        this.visitasService.agregarVisita(data).subscribe((result) => {
          if (result['resultado'] == 'OK') {
            this.visitasService.modificarVisitas(this.cliente).subscribe(datos => {
              if (datos['resultado'] == 'OK') {
                this.notificacion.success('Visita creada, Descuento 8%', 'Operacion Exitosa!');
                this.route.navigate(['/clientes']);
              }
            });
          }
        });
      }
    });
  }
}
