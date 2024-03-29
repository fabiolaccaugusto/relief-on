import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CursosGuardService } from "../guards/cursos.guard.service";

import { CursosComponent } from "./cursos.component";
import { CursoNovoComponent } from './novo/curso-novo.component';
import { CursoEditComponent } from 'src/app/cursos/edit/curso-edit.component';
import { CursoDetalhesComponent } from 'src/app/cursos/detalhes/curso-detalhes.component';



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
            path: ':id/edit',
            component: CursoEditComponent,
            canActivateChild: [CursosGuardService]
        },
        {
            path: ':id/detalhes',
            component: CursoDetalhesComponent

        }
    ]
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CursosRoutingModule {}
