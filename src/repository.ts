import type { NewWizard, Spell, Wizard } from "./types";
import { ValidateSpellPower } from "./decorators";

export class Repository<T extends { id: number }> {
  protected items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return [...this.items];
  }

  getById(id: number): T | undefined {
    return this.items.find(item => item.id === id);
  }
}

export class WizardRepository extends Repository<Wizard> {
  private nextId = 1;

  // Exercise 1: the repository assigns the id, not the caller
  addWizard(data: NewWizard): Wizard {
    const wizard: Wizard = { id: this.nextId++, ...data };
    this.add(wizard);
    return wizard;
  }

  // Exercise 2: filter by house
  findByHouse(house: Wizard["house"]): Wizard[] {
    return this.getAll().filter(wizard => wizard.house === house);
  }
}

export class SpellRepository extends Repository<Spell> {
  // Exercise 4: power validation
  @ValidateSpellPower
  override add(spell: Spell): void {
    super.add(spell);
  }
}
