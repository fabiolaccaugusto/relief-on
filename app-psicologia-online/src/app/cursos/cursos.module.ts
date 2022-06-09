import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { CursoNovoComponent } from './novo/curso-novo.component';
import { CursoEditComponent } from './edit/curso-edit.component';
import { CursoDetalhesComponent } from './detalhes/curso-detalhes.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
@NgModule({
    declarations: [
     CursosComponent,
     CursoNovoComponent,
     CursoEditComponent,
     CursoDetalhesComponent,
     CatalogoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CursosRoutingModule
    ],
    providers: [ ]
})
export class CursosModule { }