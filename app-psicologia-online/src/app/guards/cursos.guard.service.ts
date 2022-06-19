import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,
         Router,
         CanActivate,
         RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthUsuarioService } from 'src/app/services/auth-usuario.service';

@Injectable({providedIn: 'root'})


export class CursosGuardService implements CanActivate {
  constructor(private rota: Router,
    private authUsuario: AuthUsuarioService) {}

public canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      if (this.authUsuario.getAutenticado()) {
      return true;
}

this.rota.navigate(['/cursos']);
return false;
}
}
