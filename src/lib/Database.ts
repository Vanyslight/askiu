import { eMateria } from "../model/EMateria";
import Question from "../model/Question";

export default class Database {
  private questions: Question[] = [];
  private nextId: number = 1;

  addQuestion(question: Question): void {
    this.questions.push(question);
  }
  createQuestion(title: eMateria, text: string): void {
    const id = (this.nextId++).toString();
    const newQuestion = new Question(id, title, text);
    this.addQuestion(newQuestion);
  }

  listQuestions(): Question[] {
    return [...this.questions]; // "..." retorna uma cópia do array;
  }
  findQuestionById(id: string): Question | undefined {
    return this.questions.find((question) => question.id === id);
    //dentro do arrow function posso criar nome, o question está no singular
    //porque é o id de uma pergunta
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
