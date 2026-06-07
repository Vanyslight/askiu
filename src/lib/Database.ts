import { eMateria } from "../model/EMateria";
import Question from "../model/Question";
import Repository from "./Repository";

export default class Database {
  private questions = new Repository<Question>();
  private nextId: number = 1;

  private addQuestion(question: Question): void {
    this.questions.add(question);
  }
  createQuestion(title: eMateria, text: string): void {
    const id = (this.nextId++).toString();
    const newQuestion = new Question(id, title, text);
    this.addQuestion(newQuestion);
  }

  listQuestions(): Question[];
  listQuestions(answered: boolean): Question[];
  listQuestions(answered?: boolean): Question[] {
    const all = this.questions.list();
    if (answered === undefined) return all;
    return all.filter((question) => question.status === answered);
  }
  findQuestionById(id: string): Question | undefined {
    return this.questions.find((question) => question.id === id);
  }

  answerQuestion(id: string, answer: string): boolean {
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
