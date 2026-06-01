import MainController from "../controller/MainController";
import PromptSync from "prompt-sync";
import { IView } from "../interface/IView";

export default class VerProva implements IView {
  public maincontroller: MainController;
  public prompt = PromptSync();

  public constructor(maincontroller: MainController) {
    this.maincontroller = maincontroller;
  }

  render(): void {
    console.clear();
    console.log("==============================");
    console.log("           Ver Prova          ");
    console.log("==============================\n");

    const answered = this.maincontroller
      .listQuestions()
      .filter((question) => question.status === true);

    if (this.maincontroller.listQuestions().length === 0) {
      console.log("Nenhuma pergunta cadastrada ainda!");
    } else if (answered.length === 0) {
      console.log("Nenhuma pergunta foi respondida ainda!");
    } else {
      answered.forEach((answered) => {
        console.log(`[${answered.id}] ${answered.title}`);
        console.log(`   Pergunta: ${answered.question}`);
        console.log(`   Resposta: ${answered.answer}`);
        console.log("");
      });
    }
    this.maincontroller.BackMenu();
  }
}
