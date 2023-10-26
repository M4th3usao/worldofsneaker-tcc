import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionario-details',
  templateUrl: './funcionario-details.component.html',
  styleUrls: ['./funcionario-details.component.css']
})
export class FuncionarioDetailsComponent {

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

}
