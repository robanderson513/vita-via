export class User {
  private Name: string;
  public Phrase: string;

  constructor(name: string) {
    this.Name = name;
    this.Phrase = name === "Rob" ? "I'm Rob" : "I'm Chiho";
  }

  public sayName(): void {
    console.log(this.Name);
  }
}
