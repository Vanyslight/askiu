export default class Repository<T> {
  private itens: T[] = [];

  add(item: T): void {
    this.itens.push(item);
  }

  list(): T[] {
    return [...this.itens];
  }

  //assinatura do meu overload, ele recebe mais de um tipo como parâmetro
  find(index: number): T | undefined;
  find(filter: (item: T) => boolean): T | undefined;
  find(param: number | ((item: T) => boolean)): T | undefined {
    if (typeof param === "number") {
      return this.itens[param];
    }

    if (typeof param === "function") {
      return this.itens.find(param);
    }
    return undefined;
  }
}
