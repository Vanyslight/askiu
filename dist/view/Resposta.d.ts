import MainController from "../controller/MainController";
import PromptSync from "prompt-sync";
import { IView } from "../interface/IView";
export default class Resposta implements IView {
    maincontroller: MainController;
    prompt: PromptSync.Prompt;
    constructor(maincontroller: MainController);
    render(): void;
}
//# sourceMappingURL=Resposta.d.ts.map