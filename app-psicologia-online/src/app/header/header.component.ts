import { Component, OnInit } from '@angular/core';
import { AuthUsuarioService } from '../services/auth-usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public showMenu: boolean = false;

  constructor(private authUsuario: AuthUsuarioService) { }

  ngOnInit(): void {
    this.authUsuario.usuarioLogado.subscribe((isLogado)=>{
      if (isLogado){
        this.showMenu = true;
      } else {
        this.showMenu = false;
      }
    });
  }
}
