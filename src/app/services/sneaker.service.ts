import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Observable } from 'rxjs';
import { Sneaker } from '../models/Sneaker';


@Injectable({
  providedIn: 'root'
})
export class SneakerService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Sneaker>{
    return this.http.get<Sneaker>(`${API_CONFIG.baseUrl}/modelos/${id}`);
  }

  findAll(): Observable<Sneaker[]> {
    return this.http.get<Sneaker[]>(`${API_CONFIG.baseUrl}/modelos`);
  }

  create(modelo: Sneaker): Observable<Sneaker>{
    return this.http.post<Sneaker>(`${API_CONFIG.baseUrl}/modelos`, modelo)
  }

  update(modelo: Sneaker): Observable<Sneaker>{
    return this.http.put<Sneaker>(`${API_CONFIG.baseUrl}/modelos/${modelo.id}`, modelo)
  }

  // delete(id: any): Observable<Sneaker>{
  //   return this.http.delete<Sneaker>(`${API_CONFIG.baseUrl}/modelos/${id}`);

  // }

}