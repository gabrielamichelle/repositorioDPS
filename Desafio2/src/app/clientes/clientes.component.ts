import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClientesService } from '../services/clientes.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  cliente: Cliente = new Cliente();
  clients: Observable<Cliente[]>;
  // @Input() idCliente: Cliente;

  constructor(
    private clientesService: ClientesService,
    private notificacion: ToastrService
  ) { }

  ngOnInit(): void {
    this.mostrarTodo();
  }
  //no busca nada :(
  busqueda(nombre: string) {
    this.clientesService.buscarClientes(nombre).subscribe(result => {this.clients = result; console.log(result);});
  }

  mostrarTodo() {
    this.clientesService.recuperarClientes().subscribe(result => this.clients = result);
  }
}
