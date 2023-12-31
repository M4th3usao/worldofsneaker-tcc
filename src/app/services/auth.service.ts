import { Injectable } from '@angular/core';
import { Credenciais } from '../models/Credenciais';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtService: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) { }

  authenticate(creds: Credenciais) {
    return this.http.post(`${API_CONFIG.baseUrl}/auth/login`, creds, {
      observe: 'response',
      responseType: 'text'
    });
  }

  successfulLogin(authToken: string) {
    localStorage.setItem('token', authToken);
  }

  isAuthenticate(){
    let token = localStorage.getItem('token');
    if(token !== null) {
      console.log(token)
      return !this.jwtService.isTokenExpired(token);
    }
    console.log(token + 'é false')
    return false
  }

  logout() {
    localStorage.clear();
  }
}
