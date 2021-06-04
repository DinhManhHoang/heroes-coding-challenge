import React from 'react';
import Heroes from 'components/Heroes';
import Weapons from 'components/Weapons';
import Armours from 'components/Amours';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { StyledH1, StyledLink, Container, LeftContainer, RightContainer } from 'components/Main/styledComponents';
import { createBrowserHistory } from 'history';
import HeroDetail from 'components/HeroDetail';
import DashBoard from 'components/Dashboard';
import WeaponDetail from 'components/WeaponDetail';
import ArmourDetail from 'components/ArmourDetail';
import { BattleGround } from 'components/BattleGround';

const hist = createBrowserHistory();

function Main() {

  return (
    <>
      <Container>
        <LeftContainer>
          <StyledH1>Tour of Heroes</StyledH1>
          <Router history={hist}>
            <nav>
              <StyledLink to="/dashboard">Dashboard</StyledLink>
              <StyledLink to="/heroes">Heroes</StyledLink>
              <StyledLink to="/weapons">Weapons</StyledLink>
              <StyledLink to="/armours">Armours</StyledLink>
            </nav>
            <Switch>
              <Route path="/dashboard" component={() => <DashBoard />} />
              <Route path="/heroes" component={() => <Heroes />} />
              <Route path="/weapons" component={() => <Weapons />} />
              <Route path="/armours" component={() => <Armours />} />
              <Route path="/detail-hero/:id" component={() => <HeroDetail />} />
              <Route path="/detail-weapon/:id" component={() => <WeaponDetail />} />
              <Route path="/detail-armour/:id" component={() => <ArmourDetail />} />
              <Redirect to="/dashboard" />
            </Switch>
          </Router>
        </LeftContainer>
        <RightContainer className="battle-ground-wrapper">
          <BattleGround />
        </RightContainer>
      </Container>
    </>
  );
}

export default Main;
