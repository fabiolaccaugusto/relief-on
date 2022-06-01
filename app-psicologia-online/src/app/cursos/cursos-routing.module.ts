import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CursosComponent } from "./cursos.component";
import { CursoNovoComponent } from './curso-novo/curso-novo.component';

const routes: Routes = [
    {
        path: '',
        component: CursosComponent
    },
    {
        path: 'novo',
        component:  CursoNovoComponent
    }
];

@NgModule ({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule]
})


export class CursosRoutingModule {

}