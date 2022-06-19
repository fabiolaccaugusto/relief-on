import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,
         FormControl,
         Validators,
         FormBuilder,
         FormArray} from '@angular/forms';

import { Aluno } from 'src/app/models/aluno.model';
import { AlunoService } from 'src/app/services/aluno.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public aluno = new Aluno();

  public alunoForm!: FormGroup;

  public listaFavoritos: any[] = [
    {
     id: 1,
     nome: 'Consulta',
     value: 'lp',
     checked: false
    },
    {
      id: 2,
      nome: 'Cursos',
      value: 'bd',
      checked: false
    },
  ];

  constructor(private alunoServ: AlunoService,
              private rota: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.alunoForm = this.formBuilder.group({
      nome: ['',
            Validators.compose([
              Validators.minLength(5),
              Validators.maxLength(150),
              Validators.required
            ])
      ],
      cpf: ['', Validators.compose([
        Validators.required,
        //RegisterComponent.cpfValidator
        ])],
      email: ['',
        Validators.compose([
          Validators.email, Validators.required
        ])
      ],
      senha: ['',
        Validators.compose([
          Validators.minLength(8),
          Validators.required
        ])
      ],
      senhaCheck: ['',
        Validators.compose([
          Validators.minLength(8),
          Validators.required,
          RegisterComponent.equalsTo('senha')
        ])
      ],
      genero: ['', Validators.required],
      favoritos: this.formBuilder.array(
        [],
        Validators.required)
    });

    this.onLoadCheckboxStatus();
  }

  public registrar() {
    console.log(this.alunoForm.value);

    if (this.alunoForm.valid) {
      console.log(this.alunoForm);
      console.log(this.alunoForm.value);

      // this.alunoServ.add(this.aluno).subscribe((resposta: any)=>{
      //   console.log(resposta);
      //   this.rota.navigate(['/login']);
      // });

    } else {
      console.log('Form inválido');
      console.log(this.alunoForm);
    }

  }


  public onSelectionChange(e: any, indice: number) {
    const favoritos: FormArray =
          this.alunoForm.get('favoritos') as FormArray;

    this.listaFavoritos[indice].checked = e.target.checked;
    this.updateCheckControl(favoritos, e.target);
  }

  public updateCheckControl(favoritos: FormArray, tag: any) {
    if (tag.checked) {
      favoritos.push(new FormControl(tag.value));
    } else {
      favoritos.controls.forEach((item, index: number)=>{
        if (item instanceof FormControl) {
          if (item.value === tag.value) {
            favoritos.removeAt(index);
            return;
          }
        }
      });
    }
  }

  public onLoadCheckboxStatus() {
    const checkboxArrayList:
    FormArray = this.alunoForm.get('favoritos') as FormArray;

    this.listaFavoritos.forEach((item)=>{
      this.updateCheckControl(checkboxArrayList, item);
    })
  }

  static equalsTo(outroCampo: string) {
    const validator = (formcontrol: FormControl)=>{
      if (outroCampo == null) {
        throw new Error('É necessário informar o campo.');
      }

      if (!formcontrol.root ||
          !(<FormGroup>formcontrol.root).controls) {
        return null
      }

      const field = (<FormGroup>formcontrol.root)
                                          .get(outroCampo);

      if (!field) {
        throw new
         Error('É necessário informar um campo válido');
      }

      if (field?.value !== formcontrol.value) {
        return { equalsTo: outroCampo}
      }

      return null;
    };

    return validator;
  }

  static cpfValidator(control: FormControl) {
    const cpf = control.value;
     if (cpf && cpf !=='') {
      const validacpf = /^\d{3}\.\d{3}\.\d{3}\-{2}$/;
      return validacpf.test(cpf) ? null : {
                                    cpfInvalido: true};
     }
     return null;
  }
}
