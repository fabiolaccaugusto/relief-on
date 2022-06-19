import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso.model';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class CursoService {
  private urlBase: string = environment.api+'cursos/';
  public cursosUpdate = new EventEmitter<boolean>();
    constructor(private httpCliente: HttpClient) { }

  public getAll(): Observable<Curso[]> {
    return this.httpCliente.get<Curso[]>(this.urlBase);
  }

  public get(id: number): Observable<Curso> {
    return this.httpCliente.get<Curso>(this.urlBase+id);
  }

  public add(curso: Curso) {
    const cursoPost = JSON.stringify(curso);
    return this.httpCliente.post(this.urlBase, cursoPost, httpOptions);
  }

  public edit(curso: Curso) {
    const cursoPut = JSON.stringify(curso);
    const id = curso.id;
    return this.httpCliente
    .put(this.urlBase+id, cursoPut, httpOptions);
  }

  public delete(id: number) {
    return this.httpCliente.delete(this.urlBase+id);
  }
}
