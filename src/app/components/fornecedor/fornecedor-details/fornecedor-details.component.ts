import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Fornecedor } from 'src/app/models/Fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-fornecedor-details',
  templateUrl: './fornecedor-details.component.html',
  styleUrls: ['./fornecedor-details.component.css']
})
export class FornecedorDetailsComponent {

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
    this.findbyid();
  }

  findbyid(): void {
    this.service.findById(this.fornecedor.id).subscribe(resposta => {
      this.fornecedor = resposta;
    })
  }

}
