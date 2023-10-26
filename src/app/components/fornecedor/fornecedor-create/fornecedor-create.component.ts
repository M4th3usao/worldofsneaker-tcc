import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Fornecedor } from 'src/app/models/Fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-fornecedor-create',
  templateUrl: './fornecedor-create.component.html',
  styleUrls: ['./fornecedor-create.component.css']
})
export class FornecedorCreateComponent {

  fornecedor: Fornecedor = {
    id: '',
    nomeFantasia: '',
    cnpj: '',
    email: '',
    razaoSocial: '',
    inscricaoEstadual: '',
    telefone: '',
    informacao: '',
    }

  nomeFantasia: FormControl = new FormControl(null, Validators.minLength(3));
  cnpj: FormControl = new FormControl(null, Validators.required);
  email: FormControl = new FormControl(null, Validators.email);
  razaoSocial: FormControl = new FormControl(null, Validators.required);
  inscricaoEstadual: FormControl = new FormControl(null, Validators.required);
  telefone: FormControl = new FormControl(null, Validators.required);
  informacao: FormControl = new FormControl(null, Validators.required);
  

  constructor( 
    private service: FornecedorService,
    private router: Router,
    private toast: ToastrService
  ){}
  
  ngOnInit(): void{}

  create(): void{
    this.service.create(this.fornecedor).subscribe(() => {
      this.toast.success('Fornecedor cadastrado com sucesso', 'Cadastro');
      this.router.navigate(['fornecedores']);
    }, ex => {
      if(ex.error.status === 500){
          this.toast.error('Número do Cadastro de Pessoa Física (CPF) brasileiro inválido!');
        
      }else{
        this.toast.error(ex.error.message);
      }
    })
  }

  validaCampos(): boolean{
    return this.nomeFantasia.valid && this.cnpj.valid 
    && this.email.valid
  }

}
