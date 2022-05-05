import { Component, OnInit } from '@angular/core';

import { Specialists } from '../models/specialists.model';
import { SpecialistsService } from '../services/specialists.service';


@Component({
  selector: 'app-specialists',
  templateUrl: './specialists.component.html',
  styleUrls: ['./specialists.component.css']
})
export class SpecialistsComponent implements OnInit {
  public specialists: Array<Specialists> = [ ];

  constructor(private specialistsServ: SpecialistsService) { }

  ngOnInit(): void {
    this.specialistsServ.getAll().subscribe((specialists: Array<Specialists>)=>{
      this.specialists = specialists;

      console.log(specialists);
    });
  }

}