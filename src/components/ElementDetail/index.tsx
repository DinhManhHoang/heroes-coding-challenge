import React from 'react';
import { StyledButton } from 'components/ElementDetail/styledComponents';
import { useHistory, useParams } from 'react-router-dom';
import { IBase } from 'types';

type ElementDetailProps<T> = {
  selectedElement: T | undefined
  selectElement: (element: T) => void,
  data: T[],
  render: (element: T) => JSX.Element | null,
  onSubmit: (element: T) => void,
};

function ElementDetail<T extends IBase>({ selectedElement, selectElement, data, render, onSubmit }: ElementDetailProps<T>) {

  const history = useHistory();
  const { id } = useParams<{ id?: string }>();

  React.useLayoutEffect(() => {
    if (id !== undefined) {
      let currentElement = data.find(data => data.id === parseInt(id));
      if (currentElement !== undefined) selectElement(currentElement);
    }
  }, [id, data, selectElement]);

  return selectedElement !== undefined 
  ? (
    <>
      {render(selectedElement)}
      <StyledButton onClick={() => {
        onSubmit(selectedElement);
        history.goBack();
      }}>go back</StyledButton>
    </>
  )
  : null;
}

export default ElementDetail;
