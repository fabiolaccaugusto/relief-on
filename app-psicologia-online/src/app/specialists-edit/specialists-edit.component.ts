import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Specialists } from '../models/specialists.model';
import { SpecialistsService } from '../services/specialists.service';

@Component({
    selector: 'app-specialists-edit',
    templateUrl: './specialists-edit.component.html',
    styleUrls: ['./specialists-edit.component.css']
})

export class SpecialistsEditComponent implements OnInit {
    public Specialists: Specialists = new Specialists();

    constructor(private rotaAtiva: ActivatedRoute,
                private rota: Router,
                private specialistsServ: SpecialistsService) { }

                ngOnInit(): void {
                  const codigo:number = Number(this.rotaAtiva.snapshot.paramMap.get('id'));
                  this.specialistsServ.get(codigo).subscribe((Specialists: Specialists)=>{
                    this.Specialists = Specialists;
                  });
                }
              
                public salvar() {
                  this.specialistsServ.edit(this.Specialists).subscribe((resposta)=>{
                    console.log(resposta);
                    this.rota.navigate(['/Specialists-detalhes/'+this.Specialists.id]);
                  });
                }
              
                public deletar() {
                  this.specialistsServ.delete(this.Specialists.id).subscribe((resposta)=>{
                    this.rota.navigate(['/home']);
                  });
                }
}
