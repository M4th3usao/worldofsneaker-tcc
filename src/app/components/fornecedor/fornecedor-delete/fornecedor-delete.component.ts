import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Fornecedor } from 'src/app/models/Fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-fornecedor-delete',
  templateUrl: './fornecedor-delete.component.html',
  styleUrls: ['./fornecedor-delete.component.css']
})
export class FornecedorDeleteComponent {

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

  delete(): void{
    this.service.delete(this.fornecedor.id).subscribe(() => {
      this.toast.success('Fornecedor deletado com sucesso', 'Delete');
      this.router.navigate(['fornecedors']);
    }, ex => {
      if(ex.error.status === 500){
          this.toast.error('Número do Cadastro de Pessoa Física (CPF) brasileiro inválido!');
        
      }else{
        this.toast.error(ex.error.message);
      }
    })
  }

}
