import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Funcionario } from 'src/app/models/Funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.css']
})
export class FuncionarioCreateComponent {

  funcionario: Funcionario = {
    id: '',
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    perfis: [],
    }

  nome: FormControl = new FormControl(null, Validators.minLength(3));
  cpf: FormControl = new FormControl(null, Validators.required);
  email: FormControl = new FormControl(null, Validators.email);
  senha: FormControl = new FormControl(null, Validators.minLength(3));

  constructor( 
    private service: FuncionarioService,
    private router: Router,
    private toast: ToastrService
  ){}
  
  ngOnInit(): void{}

  create(): void{
    this.service.create(this.funcionario).subscribe(() => {
      this.toast.success('Funcionário cadastrado com sucesso', 'Cadastro');
      this.router.navigate(['funcionarios']);
    }, ex => {
      if(ex.error.status === 500){
        console.log(ex);
        this.toast.error('Número do Cadastro de Pessoa Física (CPF) brasileiro inválido!');
        
      }else{
        this.toast.error(ex.error.error);
      }
    })
  }

  addPerfil(perfil: any): void{
    if(this.funcionario.perfis.includes(perfil)){
      this.funcionario.perfis.splice(this.funcionario.perfis.indexOf(perfil), 1);
    }else{
      this.funcionario.perfis.push(perfil);
    }
  }


  validaCampos(): boolean{
    return this.nome.valid && this.cpf.valid 
    && this.email.valid && this.senha.valid
  }

}
