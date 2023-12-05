import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './auth/auth.guard';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriasListComponent } from './components/categorias/categorias-list/categorias-list.component';
import { CategoriaCreateComponent } from './components/categorias/categoria-create/categoria-create.component';
import { CategoriaUpdateComponent } from './components/categorias/categoria-update/categoria-update.component';
import { CategoriaDetailsComponent } from './components/categorias/categoria-details/categoria-details.component';
import { SneakerListComponent } from './components/sneaker/sneaker-list/sneaker-list.component';
import { SneakerCreateComponent } from './components/sneaker/sneaker-create/sneaker-create.component';
import { SneakerUpdateComponent } from './components/sneaker/sneaker-update/sneaker-update.component';
import { SneakerDetailsComponent } from './components/sneaker/sneaker-details/sneaker-details.component';
import { NotificacoesComponent } from './components/notificacoes/notificacoes.component';
import { FornecedorDetailsComponent } from './components/fornecedor/fornecedor-details/fornecedor-details.component';
import { FornecedorUpdateComponent } from './components/fornecedor/fornecedor-update/fornecedor-update.component';
import { FornecedorCreateComponent } from './components/fornecedor/fornecedor-create/fornecedor-create.component';
import { FornecedorListComponent } from './components/fornecedor/fornecedor-list/fornecedor-list.component';
import { FuncionarioDetailsComponent } from './components/funcionario/funcionario-details/funcionario-details.component';
import { FuncionarioDeleteComponent } from './components/funcionario/funcionario-delete/funcionario-delete.component';
import { FuncionarioUpdateComponent } from './components/funcionario/funcionario-update/funcionario-update.component';
import { FuncionarioCreateComponent } from './components/funcionario/funcionario-create/funcionario-create.component';
import { FuncionarioListComponent } from './components/funcionario/funcionario-list/funcionario-list.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},

  {
    path: '', component: NavComponent, canActivate: [authGuard], children: [
      {path: 'home', component: HomeComponent},

      {path: 'categorias', component: CategoriasListComponent},
      {path: 'categorias/create', component: CategoriaCreateComponent},
      {path: 'categorias/update/:id', component: CategoriaUpdateComponent},
      {path: 'categorias/details/:id', component: CategoriaDetailsComponent},

      {path: 'modelos', component: SneakerListComponent},
      {path: 'modelos/create', component: SneakerCreateComponent},
      {path: 'modelos/update/:id', component: SneakerUpdateComponent},
      {path: 'modelos/details/:id', component: SneakerDetailsComponent},

      {path: 'funcionarios', component: FuncionarioListComponent},
      {path: 'funcionarios/create', component: FuncionarioCreateComponent},
      {path: 'funcionarios/update/:id', component: FuncionarioUpdateComponent},
      {path: 'funcionarios/delete/:id', component: FuncionarioDeleteComponent},
      {path: 'funcionarios/details/:id', component: FuncionarioDetailsComponent},        

      {path: 'fornecedores', component: FornecedorListComponent},
      {path: 'fornecedores/create', component: FornecedorCreateComponent},
      {path: 'fornecedores/update/:id', component: FornecedorUpdateComponent},
      {path: 'fornecedores/details/:id', component: FornecedorDetailsComponent},

      {path: 'notificacoes', component: NotificacoesComponent},
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
