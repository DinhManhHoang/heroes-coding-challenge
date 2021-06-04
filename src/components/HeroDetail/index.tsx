import React from 'react';
import { StyledInput, StyledLabel, Container, ImageInput, ImageBox } from 'components/ElementDetail/styledComponents';
import { HeroesContextType, HeroesContext, WeaponsContextType, WeaponsContext, ArmoursContextType, ArmoursContext, CombatantContextType, CombatantContext } from 'contexts';
import ElementDetail from 'components/ElementDetail';
import { IArmour, IHero, IWeapon } from 'types';
import defaultImg from 'assets/default.png';

function HeroDetail() {

  const { selectedHero, selectHero, setHero, heroes } = React.useContext<HeroesContextType>(HeroesContext);
  const { updateCombatant } = React.useContext<CombatantContextType>(CombatantContext);
  const { weapons } = React.useContext<WeaponsContextType>(WeaponsContext);
  const { armours } = React.useContext<ArmoursContextType>(ArmoursContext);
  const fileInputRef = React.useRef(null);

  const [name, setName] = React.useState(() => selectedHero ? selectedHero.name : "");
  const [weaponId, setWeapon] = React.useState(() => selectedHero ? selectedHero.weapon.id : 0);
  const [armourId, setArmour] = React.useState(() => selectedHero ? selectedHero.armour.id : 0);

  React.useLayoutEffect(() => { 
    setName(selectedHero ? selectedHero.name : ""); 
    setWeapon(() => selectedHero ? selectedHero.weapon.id : 0);
    setArmour(() => selectedHero ? selectedHero.armour.id : 0);
  }, [selectedHero]);

  const handleUpload = (file: File | null) => {
    if (file === null) return;
    if (selectedHero === undefined) return;
    let fileReader = new FileReader();
    fileReader.onload = (evt) => {
      setHero(selectedHero.id, { avatar: evt.target?.result });
    }
    fileReader.readAsDataURL(file);
  }

  return (
    <ElementDetail<IHero>
      selectedElement={selectedHero}
      selectElement={selectHero}
      data={heroes}
      onSubmit={(hero) => {
        const newHero: IHero = {
          ...hero,
          name, 
          weapon: weapons.find(weapon => weapon.id === weaponId) as IWeapon,
          armour: armours.find(armour => armour.id === armourId) as IArmour
        }
        setHero(hero.id, newHero);
        updateCombatant(newHero);
      }}
      render={(hero) => (
        <>
          <h2>{name.toLocaleUpperCase()} Details</h2>
          <Container>
            <div><span>id: </span>{hero.id}</div>
            <div>
              <ImageBox htmlFor="hero-avatar">
                <StyledLabel as="span">Hero avatar: </StyledLabel>
                <img alt="avatar" width={100} height={100} loading='lazy' src={hero.avatar ? hero.avatar.toString() : defaultImg} />
              </ImageBox>
              <ImageInput ref={fileInputRef} type='file' accept='image/*' id="hero-avatar" onChange={evt => handleUpload(evt.target.files !== null ? evt.target.files[0] : null)}/>
            </div>
            <div>
              <StyledLabel htmlFor="hero-name">Hero name: </StyledLabel>
              <StyledInput autoFocus id="hero-name" value={name} onChange={evt => setName(evt.target.value)} placeholder="name" />
            </div>
            <div><span>health: </span>{hero.health}(+{armours.find(armour => armour.id === armourId)?.health})</div>
            <div><span>damage: </span>{weapons.find(weapon => weapon.id === weaponId)?.damage}</div>
            <div>
              <StyledLabel htmlFor="hero-weapon">Weapon used: </StyledLabel>
              <select id="hero-weapon" value={weaponId} onChange={evt => setWeapon(parseInt(evt.target.value))}>
                {weapons.map(weapon => (
                  <option key={weapon.id} value={weapon.id}>{weapon.name}</option>
                ))}
              </select>
            </div>
            <div>
              <StyledLabel htmlFor="hero-armour">Armour used: </StyledLabel>
              <select id="hero-armour" value={armourId} onChange={evt => setArmour(parseInt(evt.target.value))}>
                {armours.map(armour => (
                  <option key={armour.id} value={armour.id}>{armour.name}</option>
                ))}
              </select>
            </div>
          </Container>
        </>
      )}
    />
  );
}

export default HeroDetail;
