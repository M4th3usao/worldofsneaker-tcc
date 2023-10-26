import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Observable } from 'rxjs';
import { Categoria } from '../models/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Categoria>{
    return this.http.get<Categoria>(`${API_CONFIG.baseUrl}/categorias/${id}`);
  }

  findAll(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${API_CONFIG.baseUrl}/categorias`);
  }

  getCategoriesIdAndName() {
    return this.http.get<{ id: number, nome: string }[]>(`${API_CONFIG.baseUrl}/categorias`);
  }

  create(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>(`${API_CONFIG.baseUrl}/categorias`, categoria)
  }

  update(categoria: Categoria): Observable<Categoria>{
    return this.http.put<Categoria>(`${API_CONFIG.baseUrl}/categorias/${categoria.id}`, categoria)
  }

  delete(id: any): Observable<Categoria>{
    return this.http.delete<Categoria>(`${API_CONFIG.baseUrl}/categorias/${id}`);

  }
}
