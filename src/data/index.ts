import { IHero, IWeapon, IArmour } from 'types';

export const weapons: IWeapon[] = [
  { id: 20, name: 'Iron Sword', damage: 6 },
  { id: 21, name: 'Mjolnir', damage: 26 },
  { id: 22, name: 'Lightsaber', damage: 19 },
  { id: 23, name: 'Excalibur', damage: 27 },
  { id: 24, name: 'Laevatein', damage: 25 },
  { id: 25, name: 'Rhongomyniad', damage: 22 }
];

export const armours: IArmour[] = [
  { id: 30, name: 'Leather Armor', health: 10 },
  { id: 31, name: 'Iron Armor', health: 20 },
  { id: 32, name: 'Silver Armor', health: 40 },
  { id: 33, name: 'Platinum Armor', health: 80 },
  { id: 34, name: 'Diamond Armor', health: 160 },
  { id: 35, name: 'Wooden Plate', health: 15 }
];

export const heroes: IHero[] = [
  { id: 10, name: 'Tornado', health: 100, weapon: weapons[0], armour: armours[0]  },
  { id: 11, name: 'Dr Nice', health: 100, weapon: weapons[0], armour: armours[0] },
  { id: 12, name: 'Narco', health: 100, weapon: weapons[0], armour: armours[0]  },
  { id: 13, name: 'Bombasto', health: 100, weapon: weapons[0], armour: armours[0]  },
  { id: 14, name: 'Celeritas', health: 100, weapon: weapons[0], armour: armours[0]  },
  { id: 15, name: 'Magneta', health: 100, weapon: weapons[0], armour: armours[0]  },
  { id: 16, name: 'RubberMan', health: 100, weapon: weapons[0], armour: armours[0]  },
  { id: 17, name: 'Dynama', health: 100, weapon: weapons[0], armour: armours[0]  },
  { id: 18, name: 'Dr IQ', health: 100, weapon: weapons[0], armour: armours[0]  },
  { id: 19, name: 'Magma', health: 100, weapon: weapons[0], armour: armours[0]  }
];