"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const PerguntaErro_1 = __importDefault(require("../errors/PerguntaErro"));
class Resposta {
    maincontroller;
    prompt = (0, prompt_sync_1.default)();
    constructor(maincontroller) {
        this.maincontroller = maincontroller;
    }
    render() {
        console.clear();
        console.log("==============================");
        console.log("        Responder Pergunta    ");
        console.log("==============================\n");
        const all = this.maincontroller.listQuestions();
        const noAnswered = all.filter((question) => question.status === false);
        if (all.length === 0) {
            console.log("Nenhuma pergunta cadastrada ainda.");
            this.maincontroller.BackMenu();
        }
        else if (noAnswered.length === 0) {
            console.log("Todas as perguntas já foram respondidas!");
            this.maincontroller.BackMenu();
        }
        else {
            noAnswered.forEach((question) => {
                console.log(`[${question.id}] ${question.title} - ${question.question}`);
            });
            try {
                const id = this.prompt("Informe o Id da pergunta que irá responder: ");
                const answer = this.prompt("Digite sua resposta: ");
                console.log();
                if (isNaN(Number(id))) {
                    throw new PerguntaErro_1.default("O Id deve ser um número.");
                }
                const sucess = this.maincontroller.answerQuestion(id, answer);
                if (sucess) {
                    console.log("\nResposta salva com sucesso");
                }
                else {
                    console.log("\nId não encontrado ou pergunta já respondida!");
                }
            }
            catch (error) {
                if (error instanceof PerguntaErro_1.default) {
                    console.log(error.toString()); //identifica o tipo do erro para concatenar na minha mensagem;
                }
                else {
                    const message = error instanceof Error ? error.message : String(error);
                    console.log("\nErro genérico: " + message);
                }
            }
            finally {
                console.log();
                this.maincontroller.BackMenu();
            }
        }
    }
}
exports.default = Resposta;
//# sourceMappingURL=Resposta.js.map