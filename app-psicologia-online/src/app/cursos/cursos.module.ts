import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';



@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }
