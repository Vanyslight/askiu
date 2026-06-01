"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Question {
    id;
    title;
    question;
    answer;
    status;
    constructor(id, title, question, answer = "", status = false) {
        this.id = id;
        this.title = title;
        this.question = question;
        this.answer = answer;
        this.status = status;
    }
}
exports.default = Question;
//# sourceMappingURL=Question.js.map