export default class PerguntaErro extends Error {
  public details?: any;

  constructor(mensagem: string, details?: any) {
    super(mensagem); //chamamos o constructor de erro;
    this.name = "PerguntaErro";
    this.details = details;
  }

  toString(): string {
    return `[${this.name}] ${this.message}`;
  }

  //só existe sobrescrita quando a classe filha herda de uma classe pai;
}
