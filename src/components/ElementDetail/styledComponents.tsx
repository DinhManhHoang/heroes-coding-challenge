import styled from 'styled-components';

export const StyledInput = styled.input`
  font-size: 1em;
  padding: .5rem;
`;

export const StyledLabel = styled.label`
  color: #435960;
  font-weight: bold;
`;

export const StyledButton = styled.button`
  margin-top: 20px;
  background-color: #eee;
  padding: 1rem;
  border-radius: 4px;
  font-size: 1rem;
  &:hover {
    background-color: #cfd8dc;
    cursor: pointer;
  }
  &:disabled {
    background-color: #eee;
    color: #ccc;
    cursor: auto;
  }
`;

export const Container = styled.div`
  & > div:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ImageInput = styled.input`
  display: none;
`;

export const ImageBox = styled.label`
  display: flex;
  align-items: center;
  width: max-content;
  & > *:not(:last-child) {
    margin-right: 5px;
  }
  & > img {
    box-sizing: border-box;
    border: 1px solid black;
  }
`;