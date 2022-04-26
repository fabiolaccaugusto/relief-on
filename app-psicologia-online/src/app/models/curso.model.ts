export class Curso {
    public id: number;
    public nome: string;
    public descricao: string;
    public preco: number;
    public foto: string;

    constructor()
    constructor(id?: number,
                nome?: string,
                descricao?: string,
                preco?: number,
                foto?: string) {
        
      this.id = id? id : 0;
      this.nome = nome? nome: '';
      this.descricao = descricao? descricao : '';
      this.preco = preco? preco : 0;
      this.foto = foto? foto : '';
    }
}
