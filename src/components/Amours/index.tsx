import React from 'react';
import DataList from 'components/DataList';
import { ArmoursContextType, ArmoursContext } from 'contexts';
import { DataEnum, IArmour } from 'types';

function Armours() {
  const { armours, selectedArmour } = React.useContext<ArmoursContextType>(ArmoursContext);

  return (
    <>
      <DataList<IArmour> 
        listType={DataEnum.Armour}
        data={armours}
        selectedElement={selectedArmour}
      />
    </>
  );
}

export default Armours;
