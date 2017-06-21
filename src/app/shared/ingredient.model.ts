export class Ingredient {
  public name: string;
  public amount: number;

  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }

  // shortcut //
  // constructor(public name: string, public amount: number){}
}// Object which will be used in detail-component
