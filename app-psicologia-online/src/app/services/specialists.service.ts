import { Injectable } from '@angular/core';
import { Specialists } from '../models/specialists.model';


@Injectable({       //responsavel por injetar o serviço dentro do componente
  providedIn: 'root'
})
export class SpecialistsService {

  public Specialists: Array<Specialists> = [
    {
      id: 0,
      nome: 'Fabíola Augusto',
      descricao: 'Psiquiatra',
      preco: 150.00,
      foto: './../../assets/img/doctors/doctors-2.jpg'
    },
    {
      id: 1,
      nome: 'William Júnior',
      descricao: 'Psicanalista',
      preco: 150.00,
      foto: './../../assets/img/doctors/doctors-1.jpg'
    },
    {
      id: 2,
      nome: 'José Maurício',
      descricao: 'Psicólogo Educacional',
      preco: 150.00,
      foto: './../../assets/img/doctors/doctors-3.jpg'
    },
    {
      id: 3,
      nome: 'Bárbara Augusto',
      descricao: 'Psicóloga Humanista',
      preco: 150.00,
      foto: './../../assets/img/doctors/doctors-4.jpg'
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
