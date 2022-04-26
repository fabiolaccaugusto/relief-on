import { Injectable } from '@angular/core';

import { Curso } from '../models/curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  public cursos: Array<Curso> = [
    {
      id: 0,
      nome: 'FIlosofia Hermética',
      descricao: 'Conhecimento milenar da filosofia Hemética...',
      preco: 1500.00,
      foto: './../../assets/img/curso-foto-teste.jpg'
    },
    {
      id: 1,
      nome: 'O Subconsciente',
      descricao: 'Saiba mais sobre o poder do subconsciente...',
      preco: 1400.00,
      foto: './../../assets/img/curso-foto-teste.jpg'
    },
    {
      id: 2,
      nome: 'Habilidades Mentais',
      descricao: 'Use corretamente as 6 habilidades mentais...',
      preco: 1300.00,
      foto: './../../assets/img/curso-foto-teste.jpg'
    },
    {
      id: 3,
      nome: 'Leis Universais',
      descricao: 'Viva em harmonia com as Leis Universais...',
      preco: 1300.00,
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
