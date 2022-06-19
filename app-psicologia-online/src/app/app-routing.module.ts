import { CursosLandingPageComponent } from './cursos-landing-page/cursos-landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from 'src/app/guards/auth-guard.service';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { SpecialistsComponent } from './specialists/specialists.component';
import { DepartamentsComponent } from './departaments/departaments.component';
import { AppointmentComponent } from './appointment/appointment.component';
//import { CursoDetalhesComponent } from 'src/app/cursos/detalhes/curso-detalhes.component';
// import { CursoNovoComponent } from 'src/app/cursos/curso-novo/curso-novo.component';
// import { CursoEditComponent } from 'src/app/cursos/edit/curso-edit.component';
import { SpecialistsDetalhesComponent } from './specialists-detalhes/specialists-detalhes.component';
import { SpecialistsEditComponent } from './specialists-edit/specialists-edit.component';
import { SpecialistsNovoComponent } from './specialists-novo/specialists-novo.component';
// import { CursoNovoComponent } from './cursos/novo/curso-novo.component';
// import { CursoEditComponent } from './cursos/edit/curso-edit.component';
// import { CursoDetalhesComponent } from './cursos/detalhes/curso-detalhes.component';
import { AdminComponent } from './admin/admin.component';

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
    path: 'admin',
    loadChildren: ()=> import('src/app/admin/admin.module')
                      .then(m => m.AdminModule)
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
    path: 'cursos-landing-page',
    component: CursosLandingPageComponent
  },
  {
    path: 'cursos',
    loadChildren: ()=> import('src/app/cursos/cursos.module')
                      .then(m => m.CursosModule)
  },


//   {
//     path: 'curso-detalhes/:id',
//     component: CursoDetalhesComponent
//   },
  //{
  // path: 'curso-novo',
  // component: CursoNovoComponent,
  // canActivate: [ AuthGuardService ]
  //},
  // {
  //   path: 'curso-edit/:id',
  //   component: CursoEditComponent
  // },
  {
    path: 'specialists-detalhes/:id',
    component: SpecialistsDetalhesComponent
  },
  {
    path: 'specialists-novo',
    component: SpecialistsNovoComponent
  },
  {
    path: 'specialists-edit/:id',
    component: SpecialistsEditComponent
  }
  // {
  //   path: ':id/edit',
  //   component: CursoEditComponent
  // },
  // {
  //   path: ':id/detalhes',
  //   component: CursoDetalhesComponent
  // },
  // {
  //   path: ':id/novo',
  //   component: CursoNovoComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//ctrl + k + c  => para Comentar
//ctrl + k + c  => para reverter comentário

