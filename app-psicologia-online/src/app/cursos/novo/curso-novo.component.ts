import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CursoService } from 'src/app/services/curso.service';
import { Curso } from '../../models/curso.model';

@Component({
  selector: 'app-curso-novo',
  templateUrl: './curso-novo.component.html',
  styleUrls: ['./curso-novo.component.css']
})
export class CursoNovoComponent implements OnInit {
  public curso: Curso = new Curso();

  constructor(private rota: Router, private cursoServ: CursoService) { }

  ngOnInit(): void {
  }

  public cadastrar() {
    this.cursoServ.add(this.curso).subscribe((resposta)=>{
      console.log(resposta);
      this.rota.navigate(['/admin']);
    });
  }
}