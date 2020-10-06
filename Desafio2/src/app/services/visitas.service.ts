import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Visita } from '../models/visita';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VisitasService {
  private url = 'http://localhost/EJERCICIOS/desafio2_dps_php/';
  // private url = 'https://desafio02-dps.000webhostapp.com/desafio2_dps_php/';
  // private url = 'http://deafio02-dps.unaux.com/desafio2_dps_php/';
  constructor(
    private http: HttpClient
  ) { }

  recuperarVisitas(id: number): Observable<any> {
    return this.http.get(`${this.url}recuperarVisitas.php?id=${id}`);
  }

  agregarVisita(data: Visita): Observable<any> {
    return this.http.post(`${this.url}agregarVisita.php`, data);
  }

  borrarVisita(id: number): Observable<any> {
    return this.http.get(`${this.url}borrarVisita.php?id=${id}`);
  }

  /*seleccionarClienteData(id: number): Observable<any> {
    return this.http.get(`${this.url}seleccionarClienteData.php?id=${id}`);
  }*/

  modificarVisitas(data: Cliente): Observable<any> {
    return this.http.post(`${this.url}modificarVisitas.php`, data);
  }
}
