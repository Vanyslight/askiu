import FirstScreen from "../view/FirstScreen";
import CadastrarPergunta from "../view/CadastrarPergunta";
import Resposta from "../view/Resposta";
import VerProva from "../view/VerProva";
import Database from "../lib/Database";
import { IView } from "../interface/IView";
import Question from "../model/Question";
import { eMateria } from "../model/EMateria";
import PromptSync from "prompt-sync";

export default class MainController {
  public viewAtual: IView; //interface para trocar as minhas views;
  private database: Database;
  public action: boolean = true; // coloquei para fechar a firstscreen
  public prompt = PromptSync();

  constructor() {
    this.database = new Database();
    this.viewAtual = new FirstScreen(this);
  }

  public start(): void {
    while (this.action) {
      if (this.viewAtual) {
        this.viewAtual.render();
      }
    }
  }

  public userChoise(option: string) {
    switch (option) {
      case "1": {
        this.viewAtual = new CadastrarPergunta(this);
        break;
      }
      case "2": {
        this.viewAtual = new Resposta(this);
        break;
      }

      case "3": {
        this.viewAtual = new VerProva(this);
        break;
      }
      case "4": {
        this.action = false;
        break;
      }
      case "VOLTAR": {
        this.viewAtual = new FirstScreen(this);
        break;
      }
      default: {
        this.viewAtual = new FirstScreen(this);
        break;
      }
    }
  }

  public BackMenu(): void {
    console.log();
    this.prompt("Pressione Enter para voltar ao menu...");
    this.userChoise("VOLTAR");
  }

  public newQuestion(titulo: eMateria, texto: string): void {
    this.database.createQuestion(titulo, texto);
  }

  public listQuestions(): Question[] {
    return this.database.listQuestions();
  }

  public answerQuestion(id: string, answer: string): boolean {
    return this.database.answerQuestion(id, answer);
  }
}
