import MainController from "../controller/MainController";
import PromptSync from "prompt-sync";
import { IView } from "../interface/IView";
export default class CadastrarPergunta implements IView {
    maincontroller: MainController;
    prompt: PromptSync.Prompt;
    constructor(maincontroller: MainController);
    render(): void;
}
//# sourceMappingURL=CadastrarPergunta.d.ts.map