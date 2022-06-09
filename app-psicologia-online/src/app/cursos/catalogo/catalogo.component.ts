import { Component, OnInit } from '@angular/core';

import { Curso } from 'src/app/models/curso.model';
import { CursoService } from 'src/app/services/curso.service';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  public cursos: Array<Curso> = [];

  constructor(private cursoServ: CursoService) { }

  ngOnInit(): void {
    this.cursoServ.getAll().subscribe((cursos: Array<Curso>)=>{
      this.cursos = cursos;

      console.log(cursos);
    });
  }

}