export class Aluno {
  public id: number;
  public nome: string;
  public email: string;
  public senha: string;
  public cpf: string;
  public genero: string;
  public favoritos: string[];

  constructor()
  constructor(id?: number, nome?: string, email?: string,
              senha?: string, cpf?: string, genero?: string,
              favoritos?: string[]) {
      this.id = (id)? id : 0;
      this.nome = (nome)? nome : '';
      this.email = (email)? email : '';
      this.senha = (senha)? senha : '';
      this.cpf = (cpf)? cpf : '';
      this.genero = (genero)? genero : '';
      this.favoritos = (favoritos?.length)? favoritos : [];
  }
}
