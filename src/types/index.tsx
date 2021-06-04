export interface IBase {
  readonly id: number
  name: string,
}

export interface IHero extends IBase {
  health: number,
  weapon: IWeapon,
  armour: IArmour,
  avatar?: string | ArrayBuffer | null,
};

export interface IWeapon extends IBase {
  damage: number 
};

export interface IArmour extends IBase {
  health: number 
};

export type TCombatant = {
  hero: IHero,
  id: number,
  health: {
    current: number,
    maximum: number
  },
  damage: number,
  critical: boolean,
  dead: boolean
};

export enum DataEnum {
  Hero = 'hero',
  Weapon = 'weapon',
  Armour = 'armour'
};