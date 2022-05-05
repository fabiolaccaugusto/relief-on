import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Specialists } from '../models/specialists.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({       //responsavel por injetar o serviço dentro do componente
  providedIn: 'root'
})
export class SpecialistsService {
  private urlBase: string = 'http://localhost:3000/specialists/';
  
  constructor(private httpCliente: HttpClient) { }

  public getAll(): Observable<Specialists[]> {
    return this.httpCliente.get<Specialists[]>(this.urlBase);
  }

  public get(id: number): Observable<Specialists> {
    return this.httpCliente.get<Specialists>(this.urlBase+'/'+id);
  }

  public add(specialists: Specialists) {
    const specialistsPost = JSON.stringify(specialists);
    return this.httpCliente.post(this.urlBase, specialistsPost, httpOptions);
    
  }

  public edit(specialists: Specialists) {
    const specialistsPut = JSON.stringify(specialists);
    const id = specialists.id;
    return this.httpCliente
    .put(this.urlBase+'/'+id, specialistsPut, httpOptions);
    
  }

  public delete(id: number) {
    return this.httpCliente.delete(this.urlBase+''+id);

  }
}

