import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SpecialistsService } from 'src/app/services/specialists.service';
import { Specialists } from 'src/app/models/specialists.model';

@Component({
  selector: 'app-specialists-novo',
  templateUrl: './specialists-novo.component.html',
  styleUrls: ['./specialists-novo.component.css']
})
export class SpecialistsNovoComponent implements OnInit {
  public specialists: Specialists = new Specialists();

  constructor(private rota: Router, private specialistsServ: SpecialistsService) { }

  ngOnInit(): void {
  }

  public cadastrar() {
    
    this.specialistsServ.add(this.specialists).subscribe((resposta)=>{
      console.log(resposta);

      this.rota.navigate(['/specialists']);
    });

  }
}