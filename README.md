# Hogwarts Academy - TypeScript assignment

Exercises 1 to 6: NewWizard (Omit), findByHouse, SpellCastEvent (Extract),
ValidateSpellPower decorator, Cache decorator (WeakMap + Map), isHouse / isWizard type guards.

## Run the project

    npm install
    npm start

## Files

- src/types.ts: House, Wizard, Spell, AcademyEvent, NewWizard, SpellCastEvent
- src/repository.ts: generic Repository<T>, WizardRepository (addWizard, findByHouse), SpellRepository (@ValidateSpellPower)
- src/decorators.ts: ValidateSpellPower, Cache
- src/main.ts: tests for the 6 exercises
