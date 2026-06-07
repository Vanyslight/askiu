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
  //aqui estou personalizando a minha sobrescrita da classe error
  //tostring já existe em todo objeto javascript, todos herdam ele;
  //só existe sobrescrita quando a classe filha herda de uma classe pai;
}
