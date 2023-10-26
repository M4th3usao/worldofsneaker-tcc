import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Observable } from 'rxjs';
import { Fornecedor } from '../models/Fornecedor';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Fornecedor>{
    return this.http.get<Fornecedor>(`${API_CONFIG.baseUrl}/fornecedores/${id}`);
  }

  findAll(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(`${API_CONFIG.baseUrl}/fornecedores`);
  }

  create(fornecedor: Fornecedor): Observable<Fornecedor>{
    return this.http.post<Fornecedor>(`${API_CONFIG.baseUrl}/fornecedores`, fornecedor)
  }

  details(id: any): Observable<Fornecedor>{
    return this.http.get<Fornecedor>(`${API_CONFIG.baseUrl}/fornecedores/${id}`);
  }

  update(fornecedor: Fornecedor): Observable<Fornecedor>{
    return this.http.put<Fornecedor>(`${API_CONFIG.baseUrl}/fornecedores/${fornecedor.id}`, fornecedor)
  }

  delete(id: any): Observable<Fornecedor>{
    return this.http.delete<Fornecedor>(`${API_CONFIG.baseUrl}/fornecedores/${id}`);
  }
}
