import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SpecialistsComponent } from './specialists/specialists.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DepartmentsComponent } from './departments/departments.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalhesComponent } from './curso-detalhes/curso-detalhes.component';
import { CursoEditComponent } from './curso-edit/curso-edit.component';
import { CursoNovoComponent } from './curso-novo/curso-novo.component';
import { ProdutosComponent } from './produtos/produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpecialistsComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    AppointmentComponent,
    HeaderComponent,
    FooterComponent,
    DepartmentsComponent,
    CursosComponent,
    CursoDetalhesComponent,
    CursoEditComponent,
    CursoNovoComponent,
    ProdutosComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
