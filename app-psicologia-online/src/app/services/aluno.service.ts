import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { Aluno } from 'src/app/models/aluno.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private url: string = environment.api+'alunos/';

  constructor(private httpCliente: HttpClient) { }

  public getAll(): Observable<Aluno[]> {
    return this.httpCliente.get<Aluno[]>(this.url);
  }

  public get(id: number): Observable<Aluno> {
    return this.httpCliente.get<Aluno>(this.url+id);
  }

  public add(aluno: Aluno): Observable<any> {
    const alunoPost = JSON.stringify(aluno);
    return this.httpCliente.post(this.url, alunoPost, httpOptions);
  }

  public checkLogin(aluno: Aluno): Observable<Aluno[]> {
    return this.httpCliente
            .get<Aluno[]>(this.url+'?email='+aluno.email+'&senha='+aluno.senha);
  }
}
