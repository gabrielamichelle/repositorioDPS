import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private url = 'http://localhost/EJERCICIOS/desafio2_dps_php/';
  constructor(
    private http: HttpClient
  ) {}

  recuperarClientes(): Observable<any> {
    return this.http.get(`${this.url}recuperarClientes.php`);
  }
}
