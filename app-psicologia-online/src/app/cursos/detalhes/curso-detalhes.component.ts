import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { CursoService } from 'src/app/services/curso.service';
import { Curso } from '../../models/curso.model';

@Component({
  selector: 'app-curso-detalhes',
  templateUrl: './curso-detalhes.component.html',
  styleUrls: ['./curso-detalhes.component.css']
})
export class CursoDetalhesComponent implements OnInit {
  public curso: Curso = new Curso();
  public inscricao!: Subscription;
  
  constructor(private rotaAtiva: ActivatedRoute,
              private cursoServ: CursoService) { }

  ngOnInit(): void {

    this.inscricao = this.rotaAtiva.params.subscribe((parametro)=>{
      const codigo = Number(parametro['id']);
      console.log(codigo);

      this.cursoServ.get(codigo).subscribe((curso: Curso)=>{
        this.curso = curso;
        console.log(curso);
      });
    });
   
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}