import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private url = 'http://localhost/EJERCICIOS/desafio2_dps_php/';
  // private url = 'https://desafio02-dps.000webhostapp.com/desafio2_dps_php/';
  // private url = 'http://deafio02-dps.unaux.com/desafio2_dps_php/';
  constructor(
    private http: HttpClient
  ) {}

  recuperarClientes(): Observable<any> {
    return this.http.get(`${this.url}recuperarClientes.php`);
  }

  seleccionarCliente(id: number): Observable<any> {
    return this.http.get(`${this.url}seleccionarCliente.php?id=${id}`);
  }

  agregarCliente(data: Cliente): Observable<any> {
    return this.http.post(`${this.url}agregarCliente.php`, data);
  }

  modificarCliente(data: Cliente): Observable<any> {
    return this.http.post(`${this.url}modificarCliente.php`, data);
  }
}
