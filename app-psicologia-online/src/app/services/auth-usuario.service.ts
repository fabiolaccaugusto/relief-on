import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AlunoService } from 'src/app/services/aluno.service';
import { Aluno } from 'src/app/models/aluno.model';

@Injectable({
    providedIn: 'root'
})
export class AuthUsuarioService {
    private autenticado: boolean = false;

    constructor(private rota: Router, private alunoServ: AlunoService) { }

    public logar(usuario: Aluno) {
        this.alunoServ.checarLogin(usuario).subscribe((resposta:Aluno[])=>{
            const [ usuarioLogin ] = resposta;

            if (usuarioLogin) {
              this.setAutenticado(true);
              this.rota.navigate(['/home']);
            }

            this.setAutenticado(false);

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
