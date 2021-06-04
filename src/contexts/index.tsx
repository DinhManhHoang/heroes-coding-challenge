import React from 'react';
import { IHero, IWeapon, IArmour, TCombatant } from 'types';

export type HeroesContextType = {
  heroes: IHero[],
  selectedHero: IHero | undefined,
  setHero: (id: number, newProperties: Object) => void,
  setHeroes: (newHeroes: IHero[]) => void,
  selectHero: (hero: IHero) => void,
};

export const HeroesContext = React.createContext<HeroesContextType>({
  heroes: [],
  selectedHero: undefined,
  setHero: (id, newProperties) => {},
  setHeroes: (newHeroes) => {},
  selectHero: (hero) => {}
});

export type WeaponsContextType = {
  weapons: IWeapon[],
  selectedWeapon: IWeapon | undefined,
  setWeapon: (id: number, newProperties: Object) => void,
  setWeapons: (newWeapons: IWeapon[]) => void,
  selectWeapon: (weapon: IWeapon) => void,
};

export const WeaponsContext = React.createContext<WeaponsContextType>({
  weapons: [],
  selectedWeapon: undefined,
  setWeapon: (id, newProperties) => {},
  setWeapons: (newWeapons) => {},
  selectWeapon: (weapon) => {}
});

export type ArmoursContextType = {
  armours: IArmour[],
  selectedArmour: IArmour | undefined,
  setArmour: (id: number, newProperties: Object) => void,
  setArmours: (newArmours: IArmour[]) => void,
  selectArmour: (armour: IArmour) => void,
};

export const ArmoursContext = React.createContext<ArmoursContextType>({
  armours: [],
  selectedArmour: undefined,
  setArmour: (id, newProperties) => {},
  setArmours: (newHeroes) => {},
  selectArmour: (hero) => {}
});

export type CombatantContextType = {
  combatants: TCombatant[],
  addCombatant: (hero: IHero) => void,
  removeCombatant: (hero: IHero) => void,
  checkCombatant: (hero: IHero) => boolean,
  updateCombatant: (hero: IHero) => void,
  doCombat: () => void,
  setCombat: (combat: boolean) => void,  
  isCombat: boolean
};

export const CombatantContext = React.createContext<CombatantContextType>({
  combatants: [],
  addCombatant: (hero) => {},
  removeCombatant: (hero) => {},
  checkCombatant: (hero) => false,
  updateCombatant: (hero) => {},
  doCombat: () => {},
  setCombat: (combat) => {},
  isCombat: false
});