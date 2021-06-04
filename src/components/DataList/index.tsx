import React from 'react';
import { StyledLi, StyledUl, Badge } from 'components/DataList/styledComponents'; 
import { useHistory } from 'react-router-dom';
import { StyledButton } from 'components/ElementDetail/styledComponents';
import { IBase, DataEnum } from 'types';

type DataListProps<T> = {
  listType: DataEnum,
  data: T[],
  selectedElement: T | undefined
};

function DataList<T extends IBase>({ listType, data, selectedElement }: DataListProps<T>) {

  const history = useHistory();

  let title: string, type: string;

  switch (listType) {
    case DataEnum.Hero: {
      title = 'My Heroes';
      type = 'hero';
      break;
    }
    case DataEnum.Weapon: {
      title = 'My Weapons';
      type = 'weapon';
      break;
    }
    case DataEnum.Armour: {
      title = 'My Armous';
      type = 'armour';
      break;
    }
    default: {
      title = '';
      type = '';
    }
  }

  return (
    <>
      <h2>{title}</h2>
      <StyledUl>
        {data.map(element => (
            <StyledLi key={element.id} onClick={() => history.push(`/detail-${type}/${element.id}`)}>
              <Badge>{element.id}</Badge> {element.name}
            </StyledLi>
        ))}
      </StyledUl>
      {selectedElement !== undefined && (
        <>
          <h2>{selectedElement.name.toLocaleUpperCase()} is my {type}</h2>
          <StyledButton onClick={() => history.push(`/detail-${type}/${selectedElement.id}`)}>View details</StyledButton>
        </>
      )}
    </>
  );
}

export default DataList;
