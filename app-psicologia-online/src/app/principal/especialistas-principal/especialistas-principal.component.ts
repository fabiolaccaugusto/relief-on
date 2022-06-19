import { Component, OnInit } from '@angular/core';
import { Specialists } from 'src/app/models/specialists.model';
import { SpecialistsService } from 'src/app/services/specialists.service';

@Component({
  selector: 'app-especialistas-principal',
  templateUrl: './especialistas-principal.component.html',
  styleUrls: ['./especialistas-principal.component.css']
})
export class EspecialistasPrincipalComponent implements OnInit {
  public specialists: Array<Specialists> = [ ];

  constructor(private specialistsServ: SpecialistsService) { }

  ngOnInit(): void {
    this.specialistsServ.getAll().subscribe((specialists: Array<Specialists>)=>{
      this.specialists = specialists;

      console.log(specialists);
    });
  }

}
