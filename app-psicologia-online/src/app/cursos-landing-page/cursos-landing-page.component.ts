import { Component, OnInit } from '@angular/core';

import { Curso } from 'src/app/models/curso.model';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-cursos-landing-page',
  templateUrl: './cursos-landing-page.component.html',
  styleUrls: ['./cursos-landing-page.component.css']
})
export class CursosLandingPageComponent implements OnInit {
  public cursos: Curso [] = [];

  constructor(private cursoServ: CursoService) { }

  ngOnInit(): void {
    this.cursoServ.getAll().subscribe((cursos)=>{
      this.cursos = cursos;

    //  console.log(cursos);
    });
  }

}
