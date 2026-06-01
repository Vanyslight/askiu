"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const EMateria_1 = require("../model/EMateria");
class CadastrarPergunta {
    maincontroller;
    prompt = (0, prompt_sync_1.default)();
    constructor(maincontroller) {
        this.maincontroller = maincontroller;
    }
    render() {
        console.clear();
        console.log("==============================");
        console.log("      Cadastrar Pergunta      ");
        console.log("==============================");
        let title = null;
        while (!title) {
            console.log("Selecione uma matéria:");
            console.log("1 - Algoritmos");
            console.log("2 - Programação orientada a objetos (POO)");
            console.log("3 - Banco de dados");
            console.log("4 - Web Development (Frontend)");
            console.log("5 - Framework and CSS");
            console.log("6 - Pensamento Computacional");
            console.log();
            const opt = this.prompt("Informe um número: ");
            switch (opt) {
                case "1":
                    title = EMateria_1.eMateria.ALGORITMOS;
                    break;
                case "2":
                    title = EMateria_1.eMateria.POO;
                    break;
                case "3":
                    title = EMateria_1.eMateria.BANCO_DE_DADOS;
                    break;
                case "4":
                    title = EMateria_1.eMateria.FRONTEND;
                    break;
                case "5":
                    title = EMateria_1.eMateria.FRAMEWORK_CSS;
                    break;
                case "6":
                    title = EMateria_1.eMateria.PENSAMENTO_COMPUTACIONAL;
                    break;
                default:
                    console.log("Opção inválida. Tente novamente.\n");
            }
        }
        console.log();
        const question = this.prompt("Digite aqui sua dúvida: ");
        console.log();
        this.maincontroller.newQuestion(title, question);
        console.log("Pergunta cadastrada com sucesso!");
        console.log();
        this.maincontroller.BackMenu();
    }
}
exports.default = CadastrarPergunta;
//# sourceMappingURL=CadastrarPergunta.js.map