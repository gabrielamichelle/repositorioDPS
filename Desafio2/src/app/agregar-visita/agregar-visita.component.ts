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
      data.idCliente = id; // asignamos el id al arreglo data
      visit = Number(visit) + 1;
      // con estos datos haremos el update del campo visitas en la tabla clientes
      this.cliente.id = id;
      this.cliente.visitas = visit;
      if (this.cliente.visitas >= 2 && this.cliente.visitas <= 5) {
        this.visita.costo = this.visita.costo - (this.visita.costo * 0.05);
        this.visitasService.agregarVisita(data).subscribe((result) => {
          if (result['resultado'] === 'OK') {
            this.visitasService.modificarVisitas(this.cliente).subscribe(datos => {
              if (datos['resultado'] === 'OK') {
                this.notificacion.success('Visita creada, Descuento 5%', 'Operacion Exitosa!');
                this.route.navigate(['/clientes']);
              }
            });
          }
        });
      } else if (this.cliente.visitas >= 6) {
        this.visita.costo = this.visita.costo - (this.visita.costo * 0.08);
        this.visitasService.agregarVisita(data).subscribe((result) => {
          if (result['resultado'] === 'OK') {
            this.visitasService.modificarVisitas(this.cliente).subscribe(datos => {
              if (datos['resultado'] === 'OK') {
                this.notificacion.success('Visita creada, Descuento 8%', 'Operacion Exitosa!');
                this.route.navigate(['/clientes']);
              }
            });
          }
        });
      }else {
        this.cliente.visitas = 1;
        this.visitasService.agregarVisita(data).subscribe((result) => {
          if (result['resultado'] === 'OK') {
            this.visitasService.modificarVisitas(this.cliente).subscribe(datos => {
              if (datos['resultado'] === 'OK') {
                this.notificacion.success('Visita creada', 'Operacion Exitosa!');
                this.route.navigate(['/clientes']);
              }
            });
          }
      });
      }
    });
  }
}
