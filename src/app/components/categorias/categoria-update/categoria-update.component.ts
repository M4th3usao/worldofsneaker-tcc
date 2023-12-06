import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/models/Categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent {

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
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ){}
  
  ngOnInit(): void{
    this.categorias.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.categorias.id).subscribe(resposta => {
      this.categorias = resposta;
    })
  }

  update(): void{
    this.service.update(this.categorias).subscribe(() => {
      this.toast.success('Categorias atualizado com sucesso', 'Update');
      this.router.navigate(['categorias']);
    }, ex => {
      if(ex.error.status === 500){
          this.toast.error('A Categoria não foi atualizada!');
        
      }else{
        this.toast.error("Ação não autorizada, verifique com  o Administrador!");
      }
    })
  }


  validaCampos(): boolean{
    return this.nome.valid && this.descricao.valid 
  }


}
