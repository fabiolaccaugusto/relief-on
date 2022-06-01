import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';                 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { CursosRoutingModule } from './cursos-routing.module';

import { CursosComponent } from './cursos.component';
import { CursoNovoComponent } from './curso-novo/curso-novo.component';

@NgModule({
    declarations: [
        CursosComponent,
        CursoNovoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CursosRoutingModule
    ],
    providers: []
})
export class CursosModule { }