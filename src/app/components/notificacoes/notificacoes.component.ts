import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Notificacoes } from 'src/app/models/notificacoes';
import { NotificationService } from 'src/app/services/notificacoes.service';

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.component.html',
  styleUrls: ['./notificacoes.component.css']
})
export class NotificacoesComponent {

  notificacoes: Notificacoes = {
    to: '',
    subject: '',
    text: '',
    attachement: ''
  }

  to: FormControl = new FormControl(null, Validators.required);
  subject: FormControl = new FormControl(null, Validators.required);
  text: FormControl = new FormControl(null, Validators.required);

  constructor( 
    private service: NotificationService,
    private router: Router,
    private toast: ToastrService
  ){}

  ngOnInit(): void{}

  sendEmail(): void{
    this.service.sendEmail(this.notificacoes).subscribe(() => {
      this.toast.success('Email enviado com sucesso!', 'Enviado');
      this.router.navigate(['notificacoes']);
    }, ex => {
      if(ex.error.status){
          this.toast.error('Email inválida');
        
      }else{
        this.toast.success('Email enviado com sucesso!');
      }
    });
  }

  validaCampos(): boolean{
    return this.to.valid && this.subject.valid 
    && this.text.valid
  }

}
