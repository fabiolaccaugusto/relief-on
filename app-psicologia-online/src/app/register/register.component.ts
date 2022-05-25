import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
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

  public alunoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private alunoServ: AlunoService,
              private rota: Router) { }

  ngOnInit(): void {
    this.alunoForm = this.formBuilder.group({
      nome: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(255)
      ])
     ],
      cpf: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      senha: ['', Validators.compose([
        Validators.required, Validators.minLength(6)
      ])],
      senhaCheck: ['', Validators.compose([
        Validators.required, Validators.minLength(6)
      ])]
    });
  }

  public registrar() {
    // this.alunoServ.add(this.aluno).subscribe((resposta: any)=>{
    //   console.log(resposta);
    //   this.rota.navigate(['/login']);
    // });
    console.log(this.alunoForm);
  }
}
