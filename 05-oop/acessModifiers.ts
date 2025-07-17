/**
 * Types
 * 
 * Public: pode ser acessado de dentro e de fora da classe
 * Private: pode ser acessado apenas dentro da classe que foi definido
 * Protected: pode ser acessado pela classe e por subclasses que extendem da classe
 */

class Animal {
  public name: string;
  private _age: number = 0;
  protected species: string;

  constructor(name: string, age: number, species: string) {
    this.name = name;
    this._age = age;
    this.species = species;
  };

  private getAge(): number {
    return this._age;
  };

  private setAge(age: number): void {
    this._age = age;
  }

  protected getSpecies(): string {
    return this.species;
  }
}