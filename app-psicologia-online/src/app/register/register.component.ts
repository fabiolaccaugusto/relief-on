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
      cpf: ['', Validators.compose([
        Validators.required,
        Validators.minLength(11),
      ])
     ],
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      senha: ['', Validators.compose([
        Validators.required, Validators.minLength(6)
      ])],
      senhaCheck: ['', Validators.compose([
        Validators.required, Validators.minLength(6)
      ])],
      genero: ['', Validators.required],
      favoritos: this.formBuilder.array([], Validators.required)
  
    });
  }

  public registrar() {
    console.log(this.alunoForm);

    if (this.alunoForm.valid && !this.alunoForm.pending) {

    } else {
      console.log('Formulário inválido')
    }


    // this.alunoServ.add(this.aluno).subscribe((resposta: any)=>{
    //   console.log(resposta);
    //   this.rota.navigate(['/login']);
    // });
  }
}
