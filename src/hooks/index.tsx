import React from 'react';
import { IBase, IHero, TCombatant } from 'types';

type DataHandler<T> = [
  T[],
  T | undefined,
  (id: number, newProperties: Object) => void,
  (newData: T[]) => void,
  (element: T) => void
];

export function useDataHandler<T extends IBase>(initialData: T[]): DataHandler<T> {
  const [data, setData] = React.useState(initialData);
  const [selectedElement, setSelectedElement] = React.useState<T | undefined>();

  const setNewElement = (id: number, newProperties: Object) => {
    let newData = [...data];
    for (let i = 0; i < newData.length; i++) {
      if (newData[i].id === id) newData[i] = { ...newData[i], ...newProperties };
    }
    setData(newData);
  };

  const setNewData = (newData: T[]) => {
    setData(newData);
  };

  const selectHero = (element: T) => {
    setSelectedElement(element);
  };

  return [data, selectedElement, setNewElement, setNewData, selectHero];
}

type CombatantHandler = [
  TCombatant[],
  (hero: IHero) => void,
  (hero: IHero) => void,
  (hero: IHero) => boolean,
  (hero: IHero) => void,
  () => void,
  (combat: boolean) => void,
  boolean
];

export function useCombatantHandler(): CombatantHandler {
  const [combatants, setCombatans] = React.useState<TCombatant[]>([]);
  const [isCombat, setIsCombat] = React.useState(false);

  const makeCombatant = (hero: IHero) => ({
    hero,
    id: hero.id,
    health: {
      current: hero.health + hero.armour.health,
      maximum: hero.health + hero.armour.health
    },
    damage: hero.weapon.damage,
    critical: false,
    dead: false
  });

  const checkCombatant = (hero: IHero) => {
    for (let i = 0; i < combatants.length; i++) {
      if (combatants[i].id === hero.id) return true;
    }
    return false;
  };

  const addCombatant = (hero: IHero) => {
    setCombatans([...combatants, makeCombatant(hero)]);
  };

  const removeCombatant = (hero: IHero) => {
    setCombatans(combatants.filter(combatant => combatant.id !== hero.id));
  };

  const updateCombatant = (hero: IHero) => {
    const newCombatants = [...combatants];
    for (let i = 0; i < combatants.length; i++) {
      if (combatants[i].id === hero.id) {
        const newCombatant = makeCombatant(hero);
        newCombatants[i] = {
          ...newCombatant,
          health: {
            current: Math.min(combatants[i].health.current, newCombatant.health.current),
            maximum: newCombatant.health.maximum
          }
        };
      } else {
        newCombatants[i] = { ...combatants[i] };
      }
    }
    setCombatans(newCombatants);
  };

  const doCombat = () => {
    if (!isCombat) return;
    const newCombatants = [...combatants];
    for (let i = 0; i < combatants.length; i++) {
      for (let j = 0; j < combatants.length; j++) {
        if (i !== j) {
          newCombatants[j].health.current -= newCombatants[i].damage;
          newCombatants[j].critical = newCombatants[j].health.current <= 50;
          newCombatants[j].dead = newCombatants[j].health.current <= 0;
        }
      }
    }
    setCombatans(newCombatants.filter(combatant => combatant.dead === false));
  }

  const setCombat = (combat: boolean) => {
    setIsCombat(combat);
  }

  return [combatants, addCombatant, removeCombatant, checkCombatant, updateCombatant, doCombat, setCombat, isCombat];
}