import React from 'react';
import DataList from 'components/DataList';
import { HeroesContextType, HeroesContext } from 'contexts';
import { DataEnum, IHero } from 'types';

function Heroes() {
  const { heroes, selectedHero } = React.useContext<HeroesContextType>(HeroesContext);

  return (
    <>
      <DataList<IHero> 
        listType={DataEnum.Hero}
        data={heroes}
        selectedElement={selectedHero}
      />
    </>
  );
}

export default Heroes;
