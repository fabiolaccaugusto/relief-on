import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from 'src/app/guards/auth-guard.service';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: ()=> import('src/app/admin/admin.module')
                      .then(m => m.AdminModule)
  },
  {
    path: 'cursos',
    loadChildren: ()=> import('src/app/cursos/cursos.module')
                      .then(m => m.CursosModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



