import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { DepartamentsComponent } from './departaments/departaments.component';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
    {
        path: '',
        component: PrincipalComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
              path: 'register',
              component: RegisterComponent
            },

            {
              path: 'contact',
              component: ContactComponent
            },
            {
              path: 'departaments',
              component: DepartamentsComponent
            },
            {
              path: 'appointment',
              component: AppointmentComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrincipalRoutingModule { }
