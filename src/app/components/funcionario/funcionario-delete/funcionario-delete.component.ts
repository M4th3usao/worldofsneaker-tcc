import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Funcionario } from 'src/app/models/Funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionario-delete',
  templateUrl: './funcionario-delete.component.html',
  styleUrls: ['./funcionario-delete.component.css']
})
export class FuncionarioDeleteComponent {

  funcionario: Funcionario = {
    id: '',
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    perfis: [],
    }

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

  delete(): void{
    this.service.delete(this.funcionario.id).subscribe(() => {
      this.toast.success('Funcionário deletado com sucesso', 'Delete');
      this.router.navigate(['funcionarios']);
    }, ex => {
      if(ex.error.status === 500){
          this.toast.error('Número do Cadastro de Pessoa Física (CPF) brasileiro inválido!');
        
      }else{
        this.toast.error(ex.error.message);
      }
    })
  }


}
