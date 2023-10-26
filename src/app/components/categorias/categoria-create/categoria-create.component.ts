import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/models/Categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent {

  categorias: Categoria = {
    id: '',
    nome: '',
    descricao: '',
    // modelos: []

    }

  nome: FormControl = new FormControl(null, Validators.minLength(3));
  descricao: FormControl = new FormControl(null, Validators.required);

  constructor( 
    private service: CategoriaService,
    private router: Router,
    private toast: ToastrService
  ){}
  
  ngOnInit(): void{}

  create(): void{
    this.service.create(this.categorias).subscribe(() => {
      this.toast.success('Categorias cadastrado com sucesso', 'Cadastro');
      this.router.navigate(['categorias']);
    }, ex => {
      if(ex.error.status === 500){
          this.toast.error('Categoria inválida');
        
      }else{
        this.toast.error(ex.error.message);
      }
    })
  }

  validaCampos(): boolean{
    return this.nome.valid && this.descricao.valid 
  }


}
