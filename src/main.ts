import { WizardRepository, SpellRepository } from "./repository";
import type { SpellCastEvent } from "./types";

const wizards = new WizardRepository();
const spells = new SpellRepository();

console.log("=== Hogwarts Academy ===");

// ---------- Exercise 1: add a wizard ----------
console.log("\n--- Exercise 1: add a wizard ---");
const harry = wizards.addWizard({
  name: "Harry Potter",
  house: "Gryffindor",
  level: 5,
  active: true,
});
wizards.addWizard({ name: "Draco Malfoy", house: "Slytherin", level: 5, active: true });
wizards.addWizard({ name: "Hermione Granger", house: "Gryffindor", level: 6, active: true });
console.log("Wizard created:", harry);
console.log("All wizards:", wizards.getAll());

// ---------- Exercise 2: filter by house ----------
console.log("\n--- Exercise 2: filter by house ---");
console.log("Gryffindor:", wizards.findByHouse("Gryffindor"));
console.log("Slytherin:", wizards.findByHouse("Slytherin"));
console.log("Hufflepuff:", wizards.findByHouse("Hufflepuff"));

// ---------- Exercise 3: Extract and spell-cast events ----------
console.log("\n--- Exercise 3: spell-cast event ---");
function handleSpellCast(event: SpellCastEvent): void {
  console.log(`Wizard ${event.wizardId} cast ${event.spellName}`);
}

handleSpellCast({
  type: "spell-cast",
  wizardId: 1,
  spellName: "Expelliarmus",
});

