import type { Spell, Wizard } from "./types";

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

export class WizardRepository extends Repository<Wizard> {}

export class SpellRepository extends Repository<Spell> {}
