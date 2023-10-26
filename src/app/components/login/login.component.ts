import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/Credenciais';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  constructor(
    private service: AuthService,
    private router: Router,
    private toast: ToastrService
    ) { }


  creds: Credenciais = {
    email: '',
    senha: ''
  }

  email = new FormControl(null, Validators.email)
  senha = new FormControl(null, Validators.minLength(3))

    ngOninit(): void{ }

  logar() {
    this.service.authenticate(this.creds).subscribe({
      next: response => {
        const responseBody = response.body.toString();
        const cleanedBody = responseBody.replace(/[{}":]|token/g, '');
        
        this.service.successfulLogin(cleanedBody);
        this.toast.success('Login realizado com sucesso', 'Login', { timeOut: 3000, positionClass: 'toast-bottom-right' });
        this.router.navigate(['']);
      },
      error: () => {
        // Em caso de erro de autenticação lança esse callback
        this.toast.error('Usuário e/ou senha inválidos');
      }
    });
  }

  validaCampos() : boolean{
    return this.email.valid && this.senha.valid
  }

}
