import { CombatantContextType, CombatantContext } from 'contexts';
import React from 'react';
import { Stage, Layer, Image, Text, Rect } from 'react-konva';
import { TCombatant } from 'types';
import useImage from 'use-image';
import defaultImg from 'assets/default.png';

type AvatarProp = {
  combatant: TCombatant,
  x: number,
  y: number,
}

const Avatar = ({ combatant, x, y }: AvatarProp) => {
  const [avatar] = useImage((combatant.hero.avatar as string) || defaultImg);
  return (
    <>
      <Image image={avatar} x={x} y={y} width={100} height={100} shadowColor="red" shadowBlur={combatant.critical ? 5 : 0} />
      <Text text={`Hero: ${combatant.hero.name}`} fontSize={10} x={x} y={y + 105}/>
      <Text text={`Health: ${combatant.health.current}/${combatant.health.maximum}`} fontSize={10} x={x} y={y + 115}/>
      <Text text={`Damge: ${combatant.damage}`} fontSize={10} x={x} y={y + 125}/>
    </>
  );
};

export const BattleGround = () => {

  const [w, setW] = React.useState(window.innerWidth / 2 - 20);
  const [h, setH] = React.useState(window.innerHeight - 40);
  const [pos, setPos] = React.useState<{ x: number, y:number }[]>([]);

  React.useLayoutEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth >= 1200) {
        setW(window.innerWidth / 2 - 20);
        setH(window.innerHeight - 40);
      } else {
        setW(Math.min(window.innerWidth - 30, 600));
        setH(Math.min(window.innerWidth - 30, 600));
      }
    }
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    }
  }, []);

  React.useLayoutEffect(() => {
    const newPos = [];
    newPos.push({
      x: 10,
      y: 10
    });
    newPos.push({
      x: w - 110,
      y: 10
    })
    newPos.push({
      x: 10,
      y: h - 140
    });
    newPos.push({
      x: w - 110,
      y: h - 140
    });
    setPos(newPos);
  }, [w, h]);

  const { combatants, doCombat, isCombat } = React.useContext<CombatantContextType>(CombatantContext);

  React.useEffect(() => {
    const damageTick = setTimeout(() => {
      doCombat();
    }, 2000);

    return () => {
      clearTimeout(damageTick);
    }
  }, [combatants, doCombat]);

  return (
    <Stage width={w} height={h}>
      <Layer>
        {combatants.map((combatant, index) => (
          <Avatar 
            key={index}
            combatant={combatant}
            x={pos[index].x}
            y={pos[index].y}
          />
        ))}
      </Layer>
      {isCombat === false && 
      (<Layer>
        <Rect width={w} height={h} fill="rgba(255, 255, 255, 0.6)"/>
        <Text text={`Stop`} fontSize={w * 0.1} align="center" verticalAlign="middle" width={w} height={h}/>
      </Layer>)}
    </Stage>
  );
}