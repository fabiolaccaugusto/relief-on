import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }  from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { SpecialistsComponent } from './specialists/specialists.component';
import { DepartamentsComponent } from './departaments/departaments.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CursosComponent } from 'src/app/cursos/cursos.component';
import { CursoDetalhesComponent } from 'src/app/curso-detalhes/curso-detalhes.component';
import { CursoNovoComponent } from 'src/app/curso-novo/curso-novo.component';
import { CursoEditComponent } from 'src/app/curso-edit/curso-edit.component';

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
    path: 'departaments',
    component: DepartamentsComponent
  },
  {
    path: 'appointment',
    component: AppointmentComponent
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
