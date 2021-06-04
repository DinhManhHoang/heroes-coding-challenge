import React from 'react';
import { StyledInput, StyledLabel, Container } from 'components/ElementDetail/styledComponents';
import { ArmoursContextType, ArmoursContext } from 'contexts';
import ElementDetail from 'components/ElementDetail';
import { IArmour } from 'types';

function ArmourDetail() {

  const { selectedArmour, selectArmour, setArmour, armours } = React.useContext<ArmoursContextType>(ArmoursContext);

  const [name, setName] = React.useState(() => selectedArmour ? selectedArmour.name : "");
  React.useLayoutEffect(() => { setName(selectedArmour ? selectedArmour.name : ""); }, [selectedArmour]);

  return (
    <ElementDetail<IArmour>
      selectedElement={selectedArmour}
      selectElement={selectArmour}
      data={armours}
      onSubmit={(armour) => setArmour(armour.id, { name })}
      render={(armour) => (
        <>
          <h2>{name.toLocaleUpperCase()} Details</h2>
          <Container>
            <div><span>id: </span>{armour.id}</div>
            <div>
              <StyledLabel htmlFor="armour-name">Armour name: </StyledLabel>
              <StyledInput autoFocus id="armour-name" value={name} onChange={evt => setName(evt.target.value)} placeholder="name" />
            </div>
            <div><span>health: </span>{armour.health}</div>
          </Container>
        </>
      )}
    />
  );
}

export default ArmourDetail;
