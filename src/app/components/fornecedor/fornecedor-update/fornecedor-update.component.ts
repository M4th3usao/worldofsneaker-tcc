import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Fornecedor } from 'src/app/models/Fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-fornecedor-update',
  templateUrl: './fornecedor-update.component.html',
  styleUrls: ['./fornecedor-update.component.css']
})
export class FornecedorUpdateComponent {

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
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ){}
  
  ngOnInit(): void{
    this.fornecedor.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.fornecedor.id).subscribe(resposta => {
      this.fornecedor = resposta;
    })
  }

  update(): void{
    this.service.update(this.fornecedor).subscribe(() => {
      this.toast.success('Fornecedor atualizado com sucesso', 'Update');
      this.router.navigate(['fornecedors']);
    }, ex => {
      if(ex.error.status === 500){
          this.toast.error('Número do Cadastro de Pessoa Física (CPF) brasileiro inválido!');
        
      }else{
        this.toast.error(ex.error.message);
      }
    })
  }

  // addPerfil(perfil: any): void{
  //   if(this.fornecedor.perfis.includes(perfil)){
  //     this.fornecedor.perfis.splice(this.fornecedor.perfis.indexOf(perfil), 1);
  //   }else{
  //     this.fornecedor.perfis.push(perfil);
  //   }
  // }


  validaCampos(): boolean{
    return this.nomeFantasia.valid && this.cnpj.valid 
    && this.email.valid
  }

}
