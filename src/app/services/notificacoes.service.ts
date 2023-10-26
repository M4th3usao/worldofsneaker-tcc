import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notificacoes } from '../models/notificacoes';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private http: HttpClient) {}

  sendEmail(notificacoes: Notificacoes): Observable<Notificacoes>{
    return this.http.post<Notificacoes>(`${API_CONFIG.baseUrl}/email/html`, notificacoes)
  }

  // sendEmailWithAttachement(notificacao: Notificacoes): Observable<any> {
  //   return this.http.post<Notificacoes>(`${API_CONFIG.baseUrl}/email/upload`, notificacao);
  // }
}