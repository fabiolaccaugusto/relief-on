export class Aluno {
  public id: number;
  public nome: string;
  public cpf: string;
  public email: string;
  public senha: string;
  public genero: string;
  public favoritos: string[];

  constructor()
  constructor(id?: number, nome?: string, 
              cpf?: string, email?: string, senha?: string, genero?: string, favoritos?:string[]) {
   this.id = (id)? id : 0;
   this.nome = (nome)? nome : '';
   this.cpf = (cpf)? cpf : '';
   this.email = (email)? email : '';
   this.senha = (senha)? senha : '';
   this.genero = (genero)? genero : '';
   this.favoritos = (favoritos?.length)? favoritos : [];
  }
}