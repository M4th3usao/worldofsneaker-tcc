import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/models/Categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria-details',
  templateUrl: './categoria-details.component.html',
  styleUrls: ['./categoria-details.component.css']
})
export class CategoriaDetailsComponent {

  categorias: Categoria = {
    id: '',
    nome: '',
    descricao: ''
  }

  constructor(
    private service: CategoriaService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void{
    this.categorias.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void{
    this.service.findById(this.categorias.id).subscribe(resposta => {
      this.categorias = resposta
    })
  }

}
