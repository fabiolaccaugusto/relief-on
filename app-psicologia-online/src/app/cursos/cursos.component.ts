import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[] = ['Java', 'Angular']
  // Cursos: array de string, e inicializei os cursos de Java, Angular.
  // Para ter a saida destes cursos na minha lista que interpolei no HTML, utilizarei a 
  // diretiva ngFor

  constructor() {
    this.nomePortal = "Fabíola Augusto";
    // aqui eu inicializei minha variável nomePortal.
    // para passar o conteudo dessa variavel para o HMTL, vou fazer interpolação ({{ NomePortal}})
  }

  ngOnInit(): void {
  }

}
