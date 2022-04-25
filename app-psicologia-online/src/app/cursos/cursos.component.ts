import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[];

  //cursos: string[] = ['Java', 'Angular']
  // Cursos: array de string, e inicializei os cursos de Java, Angular.
  // Para ter a saida destes cursos na minha lista que interpolei no HTML, utilizarei a 
  // diretiva ngFor

  constructor(private CursosService: CursosService) {
    this.nomePortal = "Fabíola Augusto";
    // aqui eu inicializei minha variável nomePortal.
    // para passar o conteudo dessa variavel para o HMTL, vou fazer interpolação ({{ NomePortal}})
 
    // var servico = new CursosService(); vou usar a injeção de dependência, dentro do construtor.
 
    this.cursos = this.CursosService.getCursos();
  }

  

ngOnInit(): void {
}

}
