import { SpecialistsComponent } from './../especialistas/specialists/specialists.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,
         ReactiveFormsModule } from '@angular/forms';

import { PrincipalRoutingModule } from './principal-routing.module';

import { PrincipalComponent } from './principal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { EspecialistasPrincipalComponent } from './especialistas-principal/especialistas-principal.component';
import { CursosPrincipalComponent } from './cursos-principal/cursos-principal.component';


@NgModule({
    declarations: [
        PrincipalComponent,
        HeaderComponent,
        FooterComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        EspecialistasPrincipalComponent,
        CursosPrincipalComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PrincipalRoutingModule
          ],
    exports: [
    ],
    providers: [],
})
export class PrincipalModule { }
