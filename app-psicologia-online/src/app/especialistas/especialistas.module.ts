import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EspecialistasComponent } from './especialistas.component';
import { EspecialistasRoutingModule } from './especialistas-routing.module';
import { SpecialistsDetalhesComponent } from './specialists-detalhes/specialists-detalhes.component';
import { SpecialistsNovoComponent } from './specialists-novo/specialists-novo.component';
import { SpecialistsEditComponent } from './specialists-edit/specialists-edit.component';

@NgModule({
    declarations: [
            SpecialistsDetalhesComponent,
            SpecialistsEditComponent,
            SpecialistsNovoComponent,
            EspecialistasComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        EspecialistasRoutingModule
    ],
    providers: [ ]
})
export class EspecialistasModule { }
