import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledH1 = styled.h1`
  margin-bottom: 0;
`;

export const StyledLink = styled(({selected, ...props}) => <Link {...props} />)`
  padding: 1rem;
  text-decoration: none;
  margin-top: 10px;
  display: inline-block;
  background-color: #e8e8e8;
  color: #3d3d3d;
  border-radius: 4px;
  &:hover {
    color: white;
    background-color: #42545C;
  }
`;

export const Container = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  box-sizing: border-box;
  @media (max-width: 1200px) {
    padding: .5rem;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
`;

export const LeftContainer = styled.div`
  padding: .5rem;
  @media (min-width: 600px) {
    padding: 2rem;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;