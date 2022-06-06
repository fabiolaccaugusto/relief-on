import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from 'src/app/models/curso.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public cursos: Curso[] = [];
  constructor(private cursoServ: CursoService) { }

  ngOnInit(): void {
    this.cursoServ.getAll().subscribe((cursos: any[])=>{
      this.cursos = cursos;
    });
  }

}
