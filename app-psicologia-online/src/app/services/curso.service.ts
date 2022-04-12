import { Injectable } from '@angular/core';

import { Curso } from '../models/curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  public cursos: Array<Curso> = [
    {
      id: 0,
      nome: 'As 7 Leis Herméticas',
      descricao: 'Curso sobre as sete principais leis herméticas se baseiam nos princípios incluídos no livro Caibalion',
      preco: 1000.00,
      foto: './../../assets/img/curso-leishermeticas.jpg'
    },
    {
      id: 1,
      nome: 'Ressonância Harmônica',
      descricao: 'O Curso de Ressonância Harmônica tiliza ondas de informação que limpam gradativamente crenças limitantes e inserem no indivíduo novas informações para alavancar seu crescimento, em todas as áreas. ',
      preco: 1050.00,
      foto: './../../assets/img/curso-ressonancia.jpg'
    },
    {
      id: 2,
      nome: 'Expansão de Consciência',
      descricao: 'O Curso de expansão de consciência envolve a ampliação das percepções sobre si mesmo e em relação ao mundo ao seu redor.',
      preco: 1100.00,
      foto: './../../assets/img/images.jpeg'
    },
    {
      id: 3,
      nome: 'Biografia de Neville Goddard',
      descricao: 'Neville Goddard dedicou-se a ilustrar os ensinamentos da verdade psicológica escondida nos ensinamentos bíblicos, e despertar a consciência do verdadeiro significado que os antigos pretenderam trazer ao mundo, mas que precisaram ocultar a verdadeira mensagem apenas àqueles que alcançaram o entendimento, durante uma época de tantas guerras e perseguições, em meio à antiguidade.',
      preco: 1200.00,
      foto: './../../assets/img/curso-neville.jpg'
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
