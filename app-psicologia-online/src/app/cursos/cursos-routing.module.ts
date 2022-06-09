import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from "./cursos.component";
import { CursoNovoComponent } from './novo/curso-novo.component';
import { CursoEditComponent } from 'src/app/cursos/edit/curso-edit.component';
import { CursoDetalhesComponent } from 'src/app/cursos/detalhes/curso-detalhes.component';
import { CatalogoComponent } from "./catalogo/catalogo.component";
import { CursosGuardService } from "../guards/cursos.guard.service";

const routes: Routes = [
    {
        path: '',
        component: CursosComponent,
        children: [    
            {
                path: 'novo',
                component: CursoNovoComponent
            },
            {
                path: 'catalogo',
                component: CatalogoComponent
            },
            {
                path: ':id/edit',
                component: CursoEditComponent
            },
            {
                path: ':id/detalhes',
                component: CursoDetalhesComponent,
                canActivateChild: [CursosGuardService]
            }]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CursosRoutingModule {}