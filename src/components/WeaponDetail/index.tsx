import React from 'react';
import { StyledInput, StyledLabel, Container } from 'components/ElementDetail/styledComponents';
import { WeaponsContextType, WeaponsContext } from 'contexts';
import ElementDetail from 'components/ElementDetail';
import { IWeapon } from 'types';

function WeaponDetail() {

  const { selectedWeapon, selectWeapon, setWeapon, weapons } = React.useContext<WeaponsContextType>(WeaponsContext);

  const [name, setName] = React.useState(() => selectedWeapon ? selectedWeapon.name : "");
  React.useLayoutEffect(() => { setName(selectedWeapon ? selectedWeapon.name : ""); }, [selectedWeapon]);

  return (
    <ElementDetail<IWeapon>
      selectedElement={selectedWeapon}
      selectElement={selectWeapon}
      data={weapons}
      onSubmit={(weapon) => setWeapon(weapon.id, { name })}
      render={(weapon) => (
        <>
          <h2>{name.toLocaleUpperCase()} Details</h2>
          <Container>
            <div><span>id: </span>{weapon.id}</div>
            <div>
              <StyledLabel htmlFor="weapon-name">Weapon name: </StyledLabel>
              <StyledInput autoFocus id="weapon-name" value={name} onChange={evt => setName(evt.target.value)} placeholder="name" />
            </div>
            <div><span>damage: </span>{weapon.damage}</div>
          </Container>
        </>
      )}
    />
  );
}

export default WeaponDetail;
