import MainController from "../controller/MainController";
import PromptSync = require("prompt-sync");
import { IView } from "../interface/IView";

export default class FirstScreen implements IView {
  private prompt = PromptSync();
  public mainController: MainController;

  constructor(mainController: MainController) {
    this.mainController = mainController;
  }

  public render(): void {
    while (true) {
      console.log("==============================");
      console.log("       Bem vindo ao Askiu     ");
      console.log("==============================");
      console.log("Informe o que deseja:");
      console.log("1 - Cadastrar Pergunta");
      console.log("2 - Resposta");
      console.log("3 - Ver prova");
      console.log("4 - Sair");

      const option = this.prompt("Escolha uma opção: ");
      let numero = Number(option);

      if (numero >= 1 && numero <= 4) {
        console.clear();
        this.mainController.userChoise(option);
        return;
      } else {
        console.log("escolha uma opção válida.");
        console.log();
        this.prompt("Pressione Enter para continuar...");
        console.clear();
      }
    }
  }
}
