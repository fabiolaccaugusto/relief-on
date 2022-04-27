import { Injectable } from '@angular/core';
import { Specialists } from '../models/specialists.model';


@Injectable({       //responsavel por injetar o serviço dentro do componente
  providedIn: 'root'
})
export class SpecialistsService {

  public Specialists: Array<Specialists> = [
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

  ];

  constructor() { }

  public getAll(): Array<Specialists> {
    return this.Specialists;
  }

  public get(id: number): Specialists {
    for(let obj of this.Specialists) {
      if (id === obj.id) {
        return obj;
      }
    }

    return new Specialists();
  }

  public add(Specialists: Specialists) {
    Specialists.id = this.Specialists.length;
    this.Specialists.push(Specialists);
  }

  public edit(Specialists: Specialists) {
    for(let obj of this.Specialists) {
      if (Specialists.id === obj.id) {
        obj = Specialists;
        break;
      }
    }
  }

  public delete(id: number) {

   let posicao = this.Specialists.findIndex((obj)=> obj.id === id);

   this.Specialists.splice(posicao, 1);
  }
}
