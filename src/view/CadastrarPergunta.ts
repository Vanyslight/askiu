import MainController from "../controller/MainController";
import PromptSync from "prompt-sync";
import { IView } from "../interface/IView";
import { eMateria } from "../model/EMateria";

export default class CadastrarPergunta implements IView {
  public maincontroller: MainController;
  public prompt = PromptSync();

  public constructor(maincontroller: MainController) {
    this.maincontroller = maincontroller;
  }
  public render(): void {
    console.clear();
    console.log("==============================");
    console.log("      Cadastrar Pergunta      ");
    console.log("==============================");
    let title: eMateria | null = null;
    while (!title) {
      console.log("Selecione uma matéria:");
      console.log("1 - Algoritmos");
      console.log("2 - Programação orientada a objetos (POO)");
      console.log("3 - Banco de dados");
      console.log("4 - Web Development (Frontend)");
      console.log("5 - Framework and CSS");
      console.log("6 - Pensamento Computacional");
      console.log();

      const opt = this.prompt("Informe um número: ");
      switch (opt) {
        case "1":
          title = eMateria.ALGORITMOS;
          break;
        case "2":
          title = eMateria.POO;
          break;
        case "3":
          title = eMateria.BANCO_DE_DADOS;
          break;
        case "4":
          title = eMateria.FRONTEND;
          break;
        case "5":
          title = eMateria.FRAMEWORK_CSS;
          break;
        case "6":
          title = eMateria.PENSAMENTO_COMPUTACIONAL;
          break;
        default:
          console.log("Opção inválida. Tente novamente.\n");
      }
    }
    console.log();
    const question = this.prompt("Digite aqui sua dúvida: ");
    console.log();
    this.maincontroller.newQuestion(title, question);
    console.log("Pergunta cadastrada com sucesso!");
    console.log();
    this.maincontroller.BackMenu();
  }
}
