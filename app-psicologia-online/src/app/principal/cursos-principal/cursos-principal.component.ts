import { Component, OnInit } from '@angular/core';

import { Curso } from 'src/app/models/curso.model';
import { CursoService } from 'src/app/services/curso.service';
import { CursoDetalhesComponent } from 'src/app/cursos/detalhes/curso-detalhes.component';

@Component({
  selector: 'app-cursos-principal',
  templateUrl: './cursos-principal.component.html',
  styleUrls: ['./cursos-principal.component.css']
})
export class CursosPrincipalComponent implements OnInit {
  public cursos: Curso [] = [];

  constructor(private cursoServ: CursoService) { }

  ngOnInit(): void {
    this.cursoServ.getAll().subscribe((cursos)=>{
      this.cursos = cursos;

    //  console.log(cursos);
    });
  }

}
