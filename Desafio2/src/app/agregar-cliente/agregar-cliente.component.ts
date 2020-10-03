import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Router} from '@angular/router'; // import router from angular router
import { Cliente } from '../models/cliente';
import { ClientesService } from '../services/clientes.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();
  constructor(
    private clientesService: ClientesService,
    private notificacion: ToastrService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  agregar(data: Cliente) {
    data.visitas = 0;
    this.clientesService.agregarCliente(data).subscribe(datos => {
      if (datos['resultado'] == 'OK') {
        this.notificacion.success('Cliente creado', 'Operacion Exitosa!');
        this.route.navigate(['/clientes']);
      }
    });
  }
}
