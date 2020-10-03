import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Router} from '@angular/router'; // import router from angular router
import { Cliente } from '../models/cliente';
import { ClientesService } from '../services/clientes.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrls: ['./modificar-cliente.component.css']
})
export class ModificarClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();
  constructor(
    private clientesService: ClientesService,
    private notificacion: ToastrService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.mostrarCliente();
  }

  mostrarCliente() {
    // this.clientesService.seleccionarCliente(id).subscribe(result => this.cliente = result[0]);
    this.activatedRoute.params.subscribe((params: Params) => {
      const id = params.id;
      this.clientesService.seleccionarCliente(id).subscribe(result => this.cliente = result[0]);
    });
  }

  modificar(data: Cliente) {
    this.activatedRoute.params.subscribe((params: Params) => {
      data.id = params.id;
      this.clientesService.modificarCliente(data).subscribe(datos => {
        if (datos['resultado'] == 'OK') {
          this.notificacion.success('Cliente modificado', 'Operacion Exitosa!');
          this.route.navigate(['/clientes']);
        }
      });
    });
  }
}
