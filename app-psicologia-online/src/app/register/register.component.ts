import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/aluno.model';
import { AlunoService } from '../services/aluno.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public aluno: Aluno = new Aluno();
  public senha: string = '';

  constructor(private alunoServ: AlunoService,
    private rota: Router) { }

  ngOnInit(): void {
  }

  public registrar() {
    this.alunoServ.add(this.aluno).subscribe((resposta: any) => {
      console.log(resposta);
      this.rota.navigate(['/login']);
    });
  }

}
