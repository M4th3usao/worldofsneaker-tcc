import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//Imports para componentes do Angular Material
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

//components module
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { CategoriasListComponent } from './components/categorias/categorias-list/categorias-list.component';
import { CategoriaCreateComponent } from './components/categorias/categoria-create/categoria-create.component';
import { CategoriaUpdateComponent } from './components/categorias/categoria-update/categoria-update.component';
import { CategoriaDetailsComponent } from './components/categorias/categoria-details/categoria-details.component';
import { SneakerListComponent } from './components/sneaker/sneaker-list/sneaker-list.component';
import { SneakerCreateComponent } from './components/sneaker/sneaker-create/sneaker-create.component';
import { SneakerUpdateComponent } from './components/sneaker/sneaker-update/sneaker-update.component';
import { SneakerDetailsComponent } from './components/sneaker/sneaker-details/sneaker-details.component';
import { FornecedorListComponent } from './components/fornecedor/fornecedor-list/fornecedor-list.component';
import { FornecedorCreateComponent } from './components/fornecedor/fornecedor-create/fornecedor-create.component';
import { FornecedorDeleteComponent } from './components/fornecedor/fornecedor-delete/fornecedor-delete.component';
import { FornecedorDetailsComponent } from './components/fornecedor/fornecedor-details/fornecedor-details.component';
import { FornecedorUpdateComponent } from './components/fornecedor/fornecedor-update/fornecedor-update.component';
import { FuncionarioListComponent } from './components/funcionario/funcionario-list/funcionario-list.component';
import { FuncionarioCreateComponent } from './components/funcionario/funcionario-create/funcionario-create.component';
import { FuncionarioDeleteComponent } from './components/funcionario/funcionario-delete/funcionario-delete.component';
import { FuncionarioDetailsComponent } from './components/funcionario/funcionario-details/funcionario-details.component';
import { FuncionarioUpdateComponent } from './components/funcionario/funcionario-update/funcionario-update.component';
import { NotificacoesComponent } from './components/notificacoes/notificacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    CategoriasListComponent,
    CategoriaCreateComponent,
    CategoriaUpdateComponent,
    CategoriaDetailsComponent,
    SneakerListComponent,
    SneakerCreateComponent,
    SneakerUpdateComponent,
    SneakerDetailsComponent,
    FornecedorListComponent,
    FornecedorCreateComponent,
    FornecedorDeleteComponent,
    FornecedorDetailsComponent,
    FornecedorUpdateComponent,
    FuncionarioListComponent,
    FuncionarioCreateComponent,
    FuncionarioDeleteComponent,
    FuncionarioDetailsComponent,
    FuncionarioUpdateComponent,
    NotificacoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // Requisições http
    HttpClientModule,
    // Angular Material
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true
    }),
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [AuthInterceptorProvider, provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
