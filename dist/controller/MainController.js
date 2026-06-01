"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FirstScreen_1 = __importDefault(require("../view/FirstScreen"));
const CadastrarPergunta_1 = __importDefault(require("../view/CadastrarPergunta"));
const Resposta_1 = __importDefault(require("../view/Resposta"));
const VerProva_1 = __importDefault(require("../view/VerProva"));
const Database_1 = __importDefault(require("../lib/Database"));
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class MainController {
    viewAtual; //interface para trocar as minhas views;
    database;
    action = true; // coloquei para fechar a firstscreen
    prompt = (0, prompt_sync_1.default)();
    constructor() {
        this.database = new Database_1.default();
        this.viewAtual = new FirstScreen_1.default(this);
    }
    start() {
        while (this.action) {
            if (this.viewAtual) {
                this.viewAtual.render();
            }
        }
    }
    userChoise(option) {
        switch (option) {
            case "1": {
                this.viewAtual = new CadastrarPergunta_1.default(this);
                break;
            }
            case "2": {
                this.viewAtual = new Resposta_1.default(this);
                break;
            }
            case "3": {
                this.viewAtual = new VerProva_1.default(this);
                break;
            }
            case "4": {
                this.action = false;
                break;
            }
            case "VOLTAR": {
                this.viewAtual = new FirstScreen_1.default(this);
                break;
            }
            default: {
                this.viewAtual = new FirstScreen_1.default(this);
                break;
            }
        }
    }
    BackMenu() {
        console.log();
        this.prompt("Pressione Enter para voltar ao menu...");
        this.userChoise("VOLTAR");
    }
    newQuestion(titulo, texto) {
        this.database.createQuestion(titulo, texto);
    }
    listQuestions() {
        return this.database.listQuestions();
    }
    answerQuestion(id, answer) {
        return this.database.answerQuestion(id, answer);
        //será que eu realmente preciso repetir esse métodos ou eu posso levar direto para as do db?
    }
}
exports.default = MainController;
//# sourceMappingURL=MainController.js.map