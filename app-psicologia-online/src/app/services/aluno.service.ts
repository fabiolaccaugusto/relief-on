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
    return this.httpCliente.post(this.url, 
                                 alunoPost, 
                                 httpOptions);
  }

  public edit(aluno: Aluno): Observable<any> {
    const alunoPut = JSON.stringify(aluno);
    return this.httpCliente.put(this.url+aluno.id,
                                alunoPut, httpOptions);
  }

  public delete(id: number): Observable<any> {
    return this.httpCliente.delete(this.url+id);
  }

  public checarLogin(aluno: Aluno): Observable<Aluno[]> {
    const url = this.url.substring(0, this.url.length-1);
    return this.httpCliente.get<Aluno[]>(url
      +'?email='+aluno.email+'&senha='+aluno.senha);
  }
}
