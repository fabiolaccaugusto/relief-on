export class Aluno {
  public id: number;
  public nome: string;
  public cpf: string;
  public email: string;
  public senha: string;

  constructor()
  constructor(id?: number, nome?: string, 
              cpf?: string, email?: string, senha?: string) {
   this.id = (id)? id : 0;
   this.nome = (nome)? nome : '';
   this.cpf = (cpf)? cpf : '';
   this.email = (email)? email : '';
   this.senha = (senha)? senha : '';
  }
}