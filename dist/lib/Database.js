"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Question_1 = __importDefault(require("../model/Question"));
class Database {
    questions = [];
    nextId = 1;
    addQuestion(question) {
        this.questions.push(question);
    }
    createQuestion(title, text) {
        const id = (this.nextId++).toString();
        const newQuestion = new Question_1.default(id, title, text);
        this.addQuestion(newQuestion);
    }
    listQuestions() {
        return [...this.questions]; // "..." retorna uma cópia do array;
    }
    findQuestionById(id) {
        return this.questions.find((question) => question.id === id);
        //dentro do arrow function posso criar nome, o question está no singular
        //porque é o id de uma pergunta
    }
    answerQuestion(id, answer) {
        const question = this.findQuestionById(id);
        if (!question) {
            return false;
        }
        if (question.status) {
            return false;
        }
        question.answer = answer;
        question.status = true;
        question.title = question.title + " R";
        return true;
    }
}
exports.default = Database;
//# sourceMappingURL=Database.js.map