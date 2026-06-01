"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class VerProva {
    maincontroller;
    prompt = (0, prompt_sync_1.default)();
    constructor(maincontroller) {
        this.maincontroller = maincontroller;
    }
    render() {
        console.clear();
        console.log("==============================");
        console.log("           Ver Prova          ");
        console.log("==============================\n");
        const answered = this.maincontroller
            .listQuestions()
            .filter((question) => question.status === true);
        if (this.maincontroller.listQuestions().length === 0) {
            console.log("Nenhuma pergunta cadastrada ainda!");
        }
        else if (answered.length === 0) {
            console.log("Nenhuma pergunta foi respondida ainda!");
        }
        else {
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
exports.default = VerProva;
//# sourceMappingURL=VerProva.js.map