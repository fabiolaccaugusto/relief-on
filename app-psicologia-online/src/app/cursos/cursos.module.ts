import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';                 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { CursosRoutingModule } from './cursos-routing.module';

import { CursosComponent } from './cursos.component';
import { CursoNovoComponent } from './novo/curso-novo.component';
import { CursoEditComponent } from 'src/app/cursos/edit/curso-edit.component';
import { CursoDetalhesComponent } from './detalhes/curso-detalhes.component';

@NgModule({
    declarations: [
        CursosComponent,
        CursoNovoComponent,
        CursoEditComponent,
        CursoDetalhesComponent
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