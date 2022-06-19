import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { CursosModule } from 'src/app/cursos/cursos.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './principal/header/header.component';
import { FooterComponent } from './principal/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { DepartamentsComponent } from './departaments/departaments.component';
import { SpecialistsComponent } from './specialists/specialists.component';
import { ContactComponent } from './contact/contact.component';
import { AppointmentComponent } from './appointment/appointment.component';
// import { CursoDetalhesComponent } from './cursos/detalhes/curso-detalhes.component';
//import { CursoNovoComponent } from './cursos/curso-novo/curso-novo.component';
// import { CursoEditComponent } from './cursos/edit/curso-edit.component';
//import { CursosComponent } from './cursos/cursos.component';
import { SpecialistsDetalhesComponent } from './specialists-detalhes/specialists-detalhes.component';
import { SpecialistsEditComponent } from './specialists-edit/specialists-edit.component';
import { SpecialistsNovoComponent } from './specialists-novo/specialists-novo.component';
import { CursosLandingPageComponent } from './cursos-landing-page/cursos-landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DepartamentsComponent,
    SpecialistsComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    AppointmentComponent,
    HeaderComponent,
    FooterComponent,
    // CursoDetalhesComponent,
    // CursoNovoComponent,
    // CursoEditComponent,
    //CursosComponent,
    SpecialistsDetalhesComponent,
    SpecialistsEditComponent,
    SpecialistsNovoComponent,
    CursosLandingPageComponent
    // AdminComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CursosModule
  ],
  exports: [
    //SpecialistsModule,
    // dizer para o angular quais sao as declarações desse modulo aqui (componentes, diretivas ou pipes)
  ],
  providers: [
    // SpecialistsService,
    // CursoService

  ],           // aqui nos colocamos os serviços que vão ficar disponíveis para todos os componentes declarados neste módulo aqui.
  bootstrap: [AppComponent]   // coloco ele aqui pq é o componente que vai ser instanciado quando executar a aplicação, neste caso é o componente que vai servir como container do meu projeto. Neste caso, como estou trabalhando com SPA, single page aplication, o app é de uma página só, eu instancio o AppComponent, que neste caso é o meu componente principal e todo o meu código da aplicação fica aqui (AppCompnent.html)

})
export class AppModule { }    // declaração da classe

// https://www.youtube.com/watch?v=36kd3uR-hG8
