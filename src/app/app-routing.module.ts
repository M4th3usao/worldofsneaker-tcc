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
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
