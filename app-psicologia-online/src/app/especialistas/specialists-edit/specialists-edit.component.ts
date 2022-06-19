import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SpecialistsService } from 'src/app/services/specialists.service';
import { Specialists } from 'src/app/models/specialists.model';

@Component({
  selector: 'app-specialists-edit',
  templateUrl: './specialists-edit.component.html',
  styleUrls: ['./specialists-edit.component.css']
})
export class SpecialistsEditComponent implements OnInit {
  public specialists: Specialists = new Specialists();

  constructor(private rotaAtiva: ActivatedRoute,
    private rota: Router,
    private specialistsServ: SpecialistsService) { }

  ngOnInit(): void {
    const codigo: number = Number(this.rotaAtiva.snapshot.paramMap.get('id'));
    this.specialistsServ.get(codigo).subscribe((specialists: Specialists) => {
      this.specialists = specialists;
    });
  }

  public salvar() {
    this.specialistsServ.edit(this.specialists).subscribe((resposta) => {
      this.rota.navigate(['/specialists-detalhes/' + this.specialists.id]);
    });
  }



  public deletar() {
    this.specialistsServ.delete(this.specialists.id).subscribe((resposta) => {
      this.rota.navigate(['/home']);
    });
  }
}
