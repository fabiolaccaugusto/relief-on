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

  ngOnInit() {
      const codigo: number = Number( this.rotaAtiva.snapshot.paramMap.get('id') );
      this.Specialists = this.specialistsServ.get(codigo);
  }

  public salvar() {
      this.specialistsServ.edit(this.Specialists);
      this.rota.navigate([`/specialists-detalhes/${this.Specialists.id}`]);
  }
}