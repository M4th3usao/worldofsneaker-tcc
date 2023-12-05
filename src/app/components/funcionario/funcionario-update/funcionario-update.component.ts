import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Funcionario } from 'src/app/models/Funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionario-update',
  templateUrl: './funcionario-update.component.html',
  styleUrls: ['./funcionario-update.component.css']
})
export class FuncionarioUpdateComponent {

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
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ){}
  
  ngOnInit(): void{
    this.funcionario.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.funcionario.id).subscribe(resposta => {
      resposta.perfis = [];
      this.funcionario = resposta;
    })
  }

  update(): void{
    this.service.update(this.funcionario).subscribe(() => {
      this.toast.success('Funcionário atualizado com sucesso', 'Update');
      this.router.navigate(['funcionarios']);
    }, ex => {
      if(ex.error.status === 500){
          this.toast.error('Número do Cadastro de Pessoa Física (CPF) brasileiro inválido!');
        
      }else{
        this.toast.error("Ação não autorizada, verifique com  o Administrador!");
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
