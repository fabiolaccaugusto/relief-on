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

    ngOnInit() {
        const codigo: number = Number( this.rotaAtiva.snapshot.paramMap.get('id') );
        this.curso = this.cursoServ.get(codigo);
    }

    public salvar() {
        this.cursoServ.edit(this.curso);
        this.rota.navigate([`/curso-detalhes/${this.curso.id}`]);
    }
}