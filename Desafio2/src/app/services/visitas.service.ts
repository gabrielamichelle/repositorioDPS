import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Visita } from '../models/visita';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VisitasService {
  private url = 'http://localhost/EJERCICIOS/desafio2_dps_php/';
  constructor(
    private http: HttpClient
  ) { }

  recuperarVisitas(): Observable<any> {
    return this.http.get(`${this.url}recuperarVisitas.php`);
  }

  agregarVisita(data: Visita): Observable<any> {
    return this.http.post(`${this.url}agregarVisita.php`, data);
  }

  borrarVisita(id: number): Observable<any> {
    return this.http.get(`${this.url}borrarVisita.php?id=${id}`);
  }
}
