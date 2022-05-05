import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Curso } from 'src/app/models/curso.model';
import { CursoService } from 'src/app/services/curso.service';

@Component({
    selector: 'app-curso-edit',
    templateUrl: './curso-edit.component.html',
    styleUrls: ['./curso-edit.component.css']
})

export class CursoEditComponent implements OnInit {
    public curso: Curso = new Curso();

    constructor(private rotaAtiva: ActivatedRoute,
                private rota: Router,
                private cursoServ: CursoService) { }

                ngOnInit(): void {
                    const codigo:number = Number(this.rotaAtiva.snapshot.paramMap.get('id'));
                    this.cursoServ.get(codigo).subscribe((curso: Curso)=>{
                      this.curso = curso;
                    });
                  }
                
                  public salvar() {
                    this.cursoServ.edit(this.curso).subscribe((resposta)=>{
                      console.log(resposta);
                      this.rota.navigate(['/curso-detalhes/'+this.curso.id]);
                    });
                  }
                
                  public deletar() {
                    this.cursoServ.delete(this.curso.id).subscribe((resposta)=>{
                      this.rota.navigate(['/home']);
                    });
                  }
}
