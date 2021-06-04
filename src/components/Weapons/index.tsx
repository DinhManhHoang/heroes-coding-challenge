import React from 'react';
import DataList from 'components/DataList';
import { WeaponsContextType, WeaponsContext } from 'contexts';
import { DataEnum, IWeapon } from 'types';

function Weapons() {
  const { weapons, selectedWeapon } = React.useContext<WeaponsContextType>(WeaponsContext);

  return (
    <>
      <DataList<IWeapon> 
        listType={DataEnum.Weapon}
        data={weapons}
        selectedElement={selectedWeapon}
      />
    </>
  );
}

export default Weapons;
