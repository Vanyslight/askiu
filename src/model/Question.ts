import { eMateria } from "./EMateria";
export default class Question {
  public id: string;
  public title: string;
  public question: string;
  public answer: string;
  public status: boolean;

  public constructor(
    id: string,
    title: eMateria,
    question: string,
    answer: string = "",
    status: boolean = false,
  ) {
    this.id = id;
    this.title = title;
    this.question = question;
    this.answer = answer;
    this.status = status;
  }
}
