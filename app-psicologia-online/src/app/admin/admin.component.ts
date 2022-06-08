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

  constructor(private cursoServ: CursoService) {
    this.carregar();
   }

  ngOnInit(): void {
    this.cursoServ.cursosUpdate.subscribe((isUpdate)=>{
      if (isUpdate) {
        this.carregar();
      }
    });
  }

public carregar(){
  this.cursoServ.getAll().subscribe((cursos: any[])=>{
    this.cursos = cursos;
  });
}

  public deletar(id:number) {
    this.cursoServ.delete(id).subscribe(()=>{
      console.log('Curso removido');
      this.cursoServ.cursosUpdate.emit(true);
    });
  }
}
