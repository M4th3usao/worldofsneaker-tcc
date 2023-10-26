import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/models/Categoria';
import { Fornecedor } from 'src/app/models/Fornecedor';
import { Sneaker } from 'src/app/models/Sneaker';
import { CategoriaService } from 'src/app/services/categoria.service';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { SneakerService } from 'src/app/services/sneaker.service';

@Component({
  selector: 'app-sneaker-update',
  templateUrl: './sneaker-update.component.html',
  styleUrls: ['./sneaker-update.component.css']
})
export class SneakerUpdateComponent {

  sneaker: Sneaker = {
    id: '',
    marca: '',
    preco: '',
    nome: '',
    tamanho: '',
    descricao: '',
    cor: '',
    quantidade: '',
    categoria: '',
    nomeCategoria: '',
    fornecedor: '',
    nomeFornecedor: '',
    }
  
    categoria: Categoria[] = []
    fornecedor: Fornecedor[] = []
    
    nome: FormControl = new FormControl(null, Validators.minLength(3));
    marca: FormControl = new FormControl(null, Validators.required);
    preco: FormControl = new FormControl(null, Validators.required);
    nomeCategoria: FormControl = new FormControl(null, Validators.required);
    nomeFornecedor: FormControl = new FormControl(null, Validators.required);
    descricao: FormControl = new FormControl(null, Validators.required);
    tamanho: FormControl = new FormControl(null, Validators.minLength(1));
    cor: FormControl = new FormControl(null, Validators.required);
    quantidade: FormControl = new FormControl(null, Validators.minLength(1));  

  constructor( 
    private service: SneakerService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private CategoriaService: CategoriaService,
    private FornecedorService: FornecedorService
  ){}
  
  ngOnInit(): void{
    this.sneaker.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    this.findAllCategoria();
    this.findAllFornecedor();
  }

  findById(): void {
    this.service.findById(this.sneaker.id).subscribe(resposta => {
      this.sneaker = resposta;
    })
  }

  update(): void{
    this.service.update(this.sneaker).subscribe(() => {
      this.toast.success('Sneaker atualizado com sucesso', 'Update');
      this.router.navigate(['modelos']);
    }, ex => {
      if(ex.error.status === 500){
        this.toast.error(ex.error.message); 
      }
    })
  }
 
  findAllCategoria(): void {
    this.CategoriaService.findAll().subscribe(response => {
      this.categoria = response
    })
  }

  findAllFornecedor(): void {
    this.FornecedorService.findAll().subscribe(response => {
      this.fornecedor = response;
      })
    }

  validaCampos(): boolean{
    return this.nome.valid && this.marca.valid 
    && this.tamanho.valid && this.quantidade.valid
  }

}
