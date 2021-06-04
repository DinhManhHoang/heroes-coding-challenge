import styled from 'styled-components';

export const StyledH2 = styled.h2`
  align: center;
`;

export const HeroesMenu = styled.div`
  padding: 0;
  margin: auto;
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: flex-start;
  align-items: flex-start;
`;

export const StyledA = styled.a`
  background-color: #3f525c;
  border-radius: 2px;
  padding: 1rem;
  font-size: 1.2rem;
  text-decoration: none;
  display: inline-block;
  color: #fff;
  text-align: center;
  width: 100%;
  min-width: 70px;
  margin: .5rem auto;
  box-sizing: border-box;
  order: 0;
  flex: 0 1 auto;
  align-self: auto;

  @media (min-width: 600px) {
    width: 18%;
    box-sizing: content-box;
  }

  &:hover {
    background-color: #000;
  }
`;