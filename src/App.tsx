import React from 'react';
import { heroes as heroesData, weapons as weaponsData, armours as armoursData } from 'data';
import { IHero, IWeapon, IArmour } from 'types';
import { HeroesContext, WeaponsContext, ArmoursContext, CombatantContext } from 'contexts';
import 'App.css';
import Main from 'components/Main';
import { useCombatantHandler, useDataHandler } from 'hooks';

function App() {

  const [heroes, selectedHero, setHero, setHeroes, selectHero] = useDataHandler<IHero>(heroesData);
  const [weapons, selectedWeapon, setWeapon, setWeapons, selectWeapon] = useDataHandler<IWeapon>(weaponsData);
  const [armours, selectedArmour, setArmour, setArmours, selectArmour] = useDataHandler<IArmour>(armoursData);

  const [combatants, addCombatant, removeCombatant, checkCombatant, updateCombatant, doCombat, setCombat, isCombat] = useCombatantHandler();

  return (
    <HeroesContext.Provider value={{ heroes, selectedHero, setHero, setHeroes, selectHero }}>
      <WeaponsContext.Provider value={{ weapons, selectedWeapon, setWeapon, setWeapons, selectWeapon }}>
        <ArmoursContext.Provider value={{ armours, selectedArmour, setArmour, setArmours, selectArmour }}>
          <CombatantContext.Provider value={{ combatants, addCombatant, removeCombatant, checkCombatant, updateCombatant, doCombat, setCombat, isCombat }}>
            <Main />
          </CombatantContext.Provider>
        </ArmoursContext.Provider>
      </WeaponsContext.Provider>
    </HeroesContext.Provider>
  );
}

export default App;
