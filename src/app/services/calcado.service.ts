import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Calcado } from '../models/Calcado';

@Injectable({
  providedIn: 'root'
})
export class CalcadoService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Calcado[]> {
    return this.http.get<Calcado[]>(`${API_CONFIG.baseUrl}/modelos`);
  }

  create(calcado: Calcado): Observable<any> { //Calcado para any
    return this.http.post(`${API_CONFIG.baseUrl}/modelos`, calcado)
  }
}
