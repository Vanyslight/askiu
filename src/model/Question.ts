import BaseQuestion from "./BaseQuestion";
import { eMateria } from "./EMateria";

export default class Question extends BaseQuestion {
  public question: string;
  public answer: string;

  public constructor(
    id: string,
    title: eMateria,
    question: string,
    answer: string = "",
    status: boolean = false,
  ) {
    super(id, title as string, status);
    this.question = question;
    this.answer = answer;
  }
}
