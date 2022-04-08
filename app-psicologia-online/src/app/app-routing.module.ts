import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { SpecialistsComponent } from './specialists/specialists.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DepartmentsComponent } from './departments/departments.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalhesComponent } from './curso-detalhes/curso-detalhes.component';
import { CursoNovoComponent } from './curso-novo/curso-novo.component';
import { CursoEditComponent } from './curso-edit/curso-edit.component';
import { ProdutosComponent } from './produtos/produtos.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },

  {
    path: 'specialists',
    component: SpecialistsComponent
  },

  {
    path: 'appointment',
    component: AppointmentComponent
  },
  {
    path: 'departments',
    component: DepartmentsComponent
  },
  {
    path: 'produtos',
    component: ProdutosComponent
  },
  {
    path: 'cursos',
    component: CursosComponent
  },
  {
    path: 'curso-detalhes/:id',
    component: CursoDetalhesComponent
  },
  {
    path: 'curso-novo',
    component: CursoNovoComponent
  },
  {
    path: 'curso-edit/:id',
    component: CursoEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
