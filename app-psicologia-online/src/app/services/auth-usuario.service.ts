import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { AlunoService } from 'src/app/services/aluno.service';
import { Aluno } from 'src/app/models/aluno.model';

@Injectable({
    providedIn: 'root'
})
export class AuthUsuarioService {
  private isAutenticado: boolean = false;
  public usuarioLogado = new EventEmitter<boolean>();

  constructor(private alunoServ: AlunoService,
              private rota: Router) { }

  public logar(aluno: Aluno) {

      this.alunoServ.checkLogin(aluno).subscribe((alunos: Aluno[])=>{
          const [ user ] = alunos;

          console.log(user);

          if (user) {
              this.isAutenticado = true;
              this.usuarioLogado.emit(true);
              this.rota.navigate(['/principal/home']);
          }

      });

  }

  public getAutenticado() {
      return this.isAutenticado;
  }
}
