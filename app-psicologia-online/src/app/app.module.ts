// METADADO imports -> ele coloco outros modulos que quero utilizar 
// neste modulo aqui ou em outro componente que pertence a este modulo.


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// O HTTPClientModule é utilizado para comunicar a aplicação Web front-end com o servidor.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DepartamentsComponent } from './departaments/departaments.component';
import { SpecialistsComponent } from './specialists/specialists.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CursoDetalhesComponent } from './curso-detalhes/curso-detalhes.component';
import { CursoNovoComponent } from './curso-novo/curso-novo.component';
import { CursoEditComponent } from './curso-edit/curso-edit.component';
import { CursosComponent } from './cursos/cursos.component';
import { SpecialistsDetalhesComponent } from './specialists-detalhes/specialists-detalhes.component';
import { SpecialistsEditComponent } from './specialists-edit/specialists-edit.component';
import { SpecialistsNovoComponent } from './specialists-novo/specialists-novo.component';
import { SpecialistsService } from './services/specialists.service';
import { AuthService } from './services/auth.service';
import { CursoService } from './services/curso.service';




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
    CursoDetalhesComponent,
    CursoNovoComponent,
    CursoEditComponent,
    CursosComponent,
    SpecialistsDetalhesComponent,
    SpecialistsEditComponent,
    SpecialistsNovoComponent
       ],

  imports: [      // modulos que quero importar
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

    //SpecialistsModule   com o modulo importado, tudo que eu tiver dentro do exports, eu consigo utilizar dentro de qualquer outro componente que estiver declarado aqui.

  ],
  exports: [
    //SpecialistsModule,

    // dizer para o angular quais sao as declarações desse modulo aqui (componentes, diretivas ou pipes)
  ],
  providers: [
    SpecialistsService,
    AuthService,
    CursoService

  ],           // aqui nos colocamos os serviços que vão ficar disponíveis para todos os componentes declarados neste módulo aqui.
  bootstrap: [AppComponent]   // coloco ele aqui pq é o componente que vai ser instanciado quando executar a aplicação, neste caso é o componente que vai servir como container do meu projeto. Neste caso, como estou trabalhando com SPA, single page aplication, o app é de uma página só, eu instancio o AppComponent, que neste caso é o meu componente principal e todo o meu código da aplicação fica aqui (AppCompnent.html)

})
export class AppModule { }    // declaração da classe




// para gerar um novo modulo: ng g m nomeModulo

// https://www.youtube.com/watch?v=36kd3uR-hG8
