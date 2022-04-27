import { Component, OnInit } from '@angular/core';

import { Curso } from 'src/app/models/curso.model';
import { CursoService } from 'src/app/services/curso.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public Curso: Array<Curso> = [ ];

  constructor(private cursoServ: CursoService) { }

  ngOnInit(): void {
    this.Curso = this.cursoServ.getAll();
  }

}
