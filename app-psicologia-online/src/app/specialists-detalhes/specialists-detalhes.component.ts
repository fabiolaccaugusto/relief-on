import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpecialistsService } from './../services/specialists.service';
import { Specialists } from '../models/specialists.model';

@Component({
  selector: 'app-specialists-detalhes',
  templateUrl: './specialists-detalhes.component.html',
  styleUrls: ['./specialists-detalhes.component.css']
})
export class SpecialistsDetalhesComponent implements OnInit {
  public Specialists: Specialists = new Specialists();

  constructor(private rotaAtiva: ActivatedRoute,
              private specialistsServ: SpecialistsService) { }

              ngOnInit(): void {
                const codigo = Number(this.rotaAtiva.snapshot.paramMap.get('id'));
                console.log(codigo);
                this.specialistsServ.get(codigo)
                .subscribe((Specialists: Specialists)=>{
                  this.Specialists = Specialists;
                  console.log(Specialists);
                });
  }
}


