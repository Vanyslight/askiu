import MainController from "../controller/MainController";
import PromptSync from "prompt-sync";
import { IView } from "../interface/IView";
import PerguntaErro from "../errors/PerguntaErro";

export default class Resposta implements IView {
  public maincontroller: MainController;
  public prompt = PromptSync();

  public constructor(maincontroller: MainController) {
    this.maincontroller = maincontroller;
  }

  public render(): void {
    console.clear();
    console.log("==============================");
    console.log("        Responder Pergunta    ");
    console.log("==============================\n");

    const all = this.maincontroller.listQuestions();
    const noAnswered = all.filter((question) => question.status === false);

    if (all.length === 0) {
      console.log("Nenhuma pergunta cadastrada ainda.");
      this.maincontroller.BackMenu();
    } else if (noAnswered.length === 0) {
      console.log("Todas as perguntas já foram respondidas!");
      this.maincontroller.BackMenu();
    } else {
      noAnswered.forEach((question) => {
        console.log(
          `[${question.id}] ${question.title} - ${question.question}`,
        );
      });

      try {
        const id = this.prompt("Informe o Id da pergunta que irá responder: ");
        const answer = this.prompt("Digite sua resposta: ");
        console.log();

        if (isNaN(Number(id))) {
          throw new PerguntaErro("O Id deve ser um número.");
        }
        const sucess = this.maincontroller.answerQuestion(id, answer);
        if (sucess) {
          console.log("\nResposta salva com sucesso");
        } else {
          console.log("\nId não encontrado ou pergunta já respondida!");
        }
      } catch (error) {
        if (error instanceof PerguntaErro) {
          console.log(error.toString()); //identifica o tipo do erro para concatenar na minha mensagem;
        } else {
          const message =
            error instanceof Error ? error.message : String(error);
          console.log("\nErro genérico: " + message);
        }
      } finally {
        console.log();
        this.maincontroller.BackMenu();
      }
    }
  }
}
