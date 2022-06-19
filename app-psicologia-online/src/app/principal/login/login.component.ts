import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/models/aluno.model';
import { AuthUsuarioService } from 'src/app/services/auth-usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public aluno: Aluno = new Aluno();

  constructor(private authUsuario: AuthUsuarioService) { }

  ngOnInit(): void {
  }

  public realizarLogin() {
    if (this.aluno.email && this.aluno.senha) {
      this.authUsuario.logar(this.aluno);
    } else {
      alert('Informe o usuário e/ou senha!');
    }
  }
}