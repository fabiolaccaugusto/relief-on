import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from 'src/app/guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full'
  },
  // {
  //   path: 'admin',
  //   loadChildren: ()=> import('src/app/admin/admin.module')
  //                     .then(m => m.AdminModule)
  // },
  {
    path: 'cursos',
    loadChildren: ()=> import('src/app/cursos/cursos.module')
                      .then(m => m.CursosModule),
                      canActivate: [AuthGuardService]
  },
  {
    path: 'especialistas',
    loadChildren: ()=> import('src/app/especialistas/especialistas.module')
                      .then(m => m.EspecialistasModule)
  },
  {
    path: 'principal',
    loadChildren:
    ()=>import('src/app/principal/principal.module')
    .then(m=> m.PrincipalModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



