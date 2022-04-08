import { Injectable } from '@angular/core';

import { Curso } from '../models/curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  public cursos: Array<Curso> = [
    {
      id: 0,
      nome: 'Desenvolvimento Web com Angular 13',
      descricao: 'Curso muito bom, muito divertido, muito legal',
      preco: 22.90,
      foto: './../../assets/img/curso-foto-teste.jpg'
    },
    {
      id: 1,
      nome: 'Criação de APIs com Node.js',
      descricao: 'Curso muito bom, muito divertido, muito legal',
      preco: 22.90,
      foto: './../../assets/img/curso-foto-teste.jpg'
    },
    {
      id: 2,
      nome: 'Python de A a Z',
      descricao: 'Curso muito bom, muito divertido, muito legal',
      preco: 22.90,
      foto: './../../assets/img/curso-foto-teste.jpg'
    },
    {
      id: 3,
      nome: 'Spring Boot 2.2',
      descricao: 'Curso muito bom, muito divertido, muito legal',
      preco: 22.90,
      foto: './../../assets/img/curso-foto-teste.jpg'
    }
  ];

  constructor() { }

  public getAll(): Array<Curso> {
    return this.cursos;
  }

  public get(id: number): Curso {
    for(let obj of this.cursos) {
      if (id === obj.id) {
        return obj;
      }
    }

    return new Curso();
  }

  public add(curso: Curso) {
    curso.id = this.cursos.length;
    this.cursos.push(curso);
  }

  public edit(curso: Curso) {
    for(let obj of this.cursos) {
      if (curso.id === obj.id) {
        obj = curso;
        break;
      }
    }
  }

  public delete(id: number) {

   let posicao = this.cursos.findIndex((obj)=> obj.id === id);

   this.cursos.splice(posicao, 1);
  }
}
