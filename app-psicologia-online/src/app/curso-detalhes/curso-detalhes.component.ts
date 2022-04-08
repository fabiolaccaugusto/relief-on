import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CursoService } from 'src/app/services/curso.service';
import { Curso } from '../models/curso.model';

@Component({
  selector: 'app-curso-detalhes',
  templateUrl: './curso-detalhes.component.html',
  styleUrls: ['./curso-detalhes.component.css']
})
export class CursoDetalhesComponent implements OnInit {
  public curso: Curso = new Curso();

  constructor(private rotaAtiva: ActivatedRoute,
    private cursoServ: CursoService) { }

  ngOnInit(): void {
    const codigo: number = Number(this.rotaAtiva.snapshot.paramMap.get('id'));
    console.log(codigo);

    this.curso = this.cursoServ.get(codigo);
  }
}