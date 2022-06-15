import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { AlunoService } from 'src/app/services/aluno.service';
import { Aluno } from 'src/app/models/aluno.model';

@Injectable({
    providedIn: 'root'
})
export class AuthUsuarioService {
    private autenticado: boolean = false;
    public usuarioLogado = new EventEmitter<boolean>();

    constructor(private rota: Router, private alunoServ: AlunoService) { }

    public logar(usuario: Aluno) {
        this.alunoServ.checarLogin(usuario).subscribe((resposta:Aluno[])=>{
            const [ usuarioLogin ] = resposta;

            console.log(usuarioLogin);

            if (usuarioLogin) {
              this.setAutenticado(true);
              this.usuarioLogado.emit(true);
              this.rota.navigate(['/admin']);
            } else {
                this.setAutenticado(false);
            }
        }); 
    }

    public criarConta(aluno: Aluno) {
        this.alunoServ.add(aluno).subscribe((alunoCad)=>{
            console.log(alunoCad);
            this.rota.navigate(['/login']);
        });
    }

    public deslogar() {

    }

    public setAutenticado(valor: boolean) {
        this.autenticado = valor;
    }

    public isAutenticado() {
        return this.autenticado;
    }
}
