import { eMateria } from "../model/EMateria";
import Question from "../model/Question";
export default class Database {
    private questions;
    private nextId;
    addQuestion(question: Question): void;
    createQuestion(title: eMateria, text: string): void;
    listQuestions(): Question[];
    findQuestionById(id: string): Question | undefined;
    answerQuestion(id: string, answer: string): boolean;
}
//# sourceMappingURL=Database.d.ts.map