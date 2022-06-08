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

// Para usar o HttpClient, HttpHeaders, temos que primeiro injetá-lo nas classes que utilizarei


export class CursoService {
  private urlBase: string = environment.api+'cursos/';

 // private urlBase: string = 'http://localhost:3000/cursos/';

  public cursosUpdate = new EventEmitter<boolean>();
  
  constructor(private httpCliente: HttpClient) { }


// O serviço HttpClient faz o uso de observables para todas as transações, para isso,
//importei o RxJS, onde emitirá notificações quando acontece alguma mudança em um de seus itens

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
