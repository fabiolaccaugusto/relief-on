import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SpecialistsService } from './../services/specialists.service';
import { Specialists } from '../models/specialists.model';

@Component({
  selector: 'app-specialists-novo',
  templateUrl: './specialists-novo.component.html',
  styleUrls: ['./specialists-novo.component.css']
})
export class SpecialistsNovoComponent implements OnInit {
  public Specialists: Specialists = new Specialists();

  constructor(private SpecialistsServ: SpecialistsService,
              private rota: Router) { }

  ngOnInit(): void {
  }

  public cadastrar() {
    this.SpecialistsServ.add(this.Specialists).subscribe((resposta)=>{
      console.log(resposta);


       this.rota.navigate(['/specialists']);
    });

  }
}
