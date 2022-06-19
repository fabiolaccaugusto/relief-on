import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from "../guards/auth-guard.service";

import { CursosComponent } from "./cursos.component";
import { CursoNovoComponent } from './novo/curso-novo.component';
import { CursoEditComponent } from 'src/app/cursos/edit/curso-edit.component';
import { CursoDetalhesComponent } from 'src/app/cursos/detalhes/curso-detalhes.component';
import { CursosLandingPageComponent } from "../cursos-landing-page/cursos-landing-page.component";


const routes: Routes = [
  {
    path: '',
    component: CursosComponent
  },
  {
    path: 'novo',
    component: CursoNovoComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: ':id/edit',
    component: CursoEditComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: ':id/detalhes',
    component: CursoDetalhesComponent
  }
];

// const routes: Routes = [
//     {
//         path: '',
//         component: CursosComponent,
//         children: [
//             {
//                 path: 'novo',
//                 component: CursoNovoComponent
//             },
//             {
//                 path: 'catalogo',
//                 component: CatalogoComponent
//             },
//             {
//                 path: ':id/edit',
//                 component: CursoEditComponent
//             },
//             {
//                path: ':id/detalhes',
//                 component: CursoDetalhesComponent,
//                 canActivateChild: [CursosGuardService]
//             }
//           ]
//     },
// ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CursosRoutingModule {}
