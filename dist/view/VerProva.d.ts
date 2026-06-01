import MainController from "../controller/MainController";
import PromptSync from "prompt-sync";
import { IView } from "../interface/IView";
export default class VerProva implements IView {
    maincontroller: MainController;
    prompt: PromptSync.Prompt;
    constructor(maincontroller: MainController);
    render(): void;
}
//# sourceMappingURL=VerProva.d.ts.map