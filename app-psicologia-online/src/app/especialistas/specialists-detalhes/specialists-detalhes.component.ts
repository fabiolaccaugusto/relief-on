import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpecialistsService } from 'src/app/services/specialists.service';
import { Specialists } from 'src/app/models/specialists.model';

@Component({
  selector: 'app-specialists-detalhes',
  templateUrl: './specialists-detalhes.component.html',
  styleUrls: ['./specialists-detalhes.component.css']
})
export class SpecialistsDetalhesComponent implements OnInit {
  public specialists: Specialists = new Specialists();

  constructor(private rotaAtiva: ActivatedRoute,
              private specialistsServ: SpecialistsService) { }

              ngOnInit(): void {
                const codigo = Number(this.rotaAtiva.snapshot.paramMap.get('id'));
                console.log(codigo);
                this.specialistsServ.get(codigo)
                .subscribe((specialists: Specialists)=>{
                  this.specialists = specialists;
                  console.log(specialists);
                });
  }
}