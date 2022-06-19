import { EspecialistasGuardService } from './../guards/especialistas.guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecialistsComponent } from './specialists/specialists.component';
import { SpecialistsDetalhesComponent } from './specialists-detalhes/specialists-detalhes.component';
import { SpecialistsEditComponent } from './specialists-edit/specialists-edit.component';
import { SpecialistsNovoComponent } from './specialists-novo/specialists-novo.component';



const routes: Routes = [
    {
        path: '',
        component: SpecialistsComponent,
        canActivateChild: [EspecialistasGuardService],
        children: [
            {
                path: '',
                //redirectTo: 'painel',
                pathMatch: 'full'
            },
            {
                path: 'novo',
                component: SpecialistsNovoComponent
            },
            {
                //path: 'painel',
                //component: PainelComponent
            },
            {
                path: ':id/edit',
                component: SpecialistsEditComponent
            },
            {
              path: ':id/detalhes',
              component: SpecialistsDetalhesComponent
          }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EspecialistasRoutingModule {}
