import React from 'react';
import { StyledH2, HeroesMenu, StyledA } from 'components/Dashboard/styledComponents';
import { HeroesContextType, HeroesContext, CombatantContext, CombatantContextType } from 'contexts';
import { IHero } from 'types';

function DashBoard() {
  const { heroes } = React.useContext<HeroesContextType>(HeroesContext);
  const { checkCombatant, addCombatant, removeCombatant, setCombat } = React.useContext<CombatantContextType>(CombatantContext);

  const handleClick = (hero: IHero) => {
    if (checkCombatant(hero)) {
      removeCombatant(hero);
    } else {
      addCombatant(hero);
    }
  }

  React.useLayoutEffect(() => {
    setCombat(true);

    return () => {
      setCombat(false);
    }
  }, [setCombat]);
  
  return (
    <>
      <StyledH2>Top Heroes</StyledH2>
      <HeroesMenu>
        {heroes.slice(0, 4).map(hero => (
          <StyledA key={hero.id} onClick={() => handleClick(hero)}>
            {hero.name}
          </StyledA>
        ))}
      </HeroesMenu>
    </>
  );
}

export default DashBoard;
