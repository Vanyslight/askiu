import { IView } from "../interface/IView";
import Question from "../model/Question";
import { eMateria } from "../model/EMateria";
import PromptSync from "prompt-sync";
export default class MainController {
    viewAtual: IView;
    private database;
    action: boolean;
    prompt: PromptSync.Prompt;
    constructor();
    start(): void;
    userChoise(option: string): void;
    BackMenu(): void;
    newQuestion(titulo: eMateria, texto: string): void;
    listQuestions(): Question[];
    answerQuestion(id: string, answer: string): boolean;
}
//# sourceMappingURL=MainController.d.ts.map