import { eMateria } from "./EMateria";

export default abstract class BaseQuestion {
  public id!: string;
  public title!: string;
  public status!: boolean;

  constructor(id: string, title: string, status: boolean = false) {
    this.id = id;
    this.title = title;
    this.status = status;
  }
}
