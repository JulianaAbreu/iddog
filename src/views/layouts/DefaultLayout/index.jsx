import React from 'react';
import PropTypes from 'prop-types';
import { Router, Link, Location } from '@reach/router';
import posed, { PoseGroup } from 'react-pose';
import styled from 'styled-components';

import StandardHeader from '../../components/StandardHeader';
import StandardContent from '../../components/StandardContent';
import DogsPage from '../../pages/DogsPage';
import SignupPage from '../../pages/SignupPage';

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 100, beforeChildren: 100 },
  exit: { opacity: 0 },
});

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 0px 8fr;
  grid-template-rows: 80px 1fr;
  grid-template-areas:
    'header header header'
    'content content content';
`;

const LogoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;

  h1,
  a {
    font-weight: 100;
    color: #303030;
  }
`;

const BrandText = styled.span`
  font-weight: 600;
`;

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <PoseGroup>
        <RouteContainer key={location.key}>
          <Router location={location}>{children}</Router>
        </RouteContainer>
      </PoseGroup>
    )}
  </Location>
);

const DefaultLayout = ({ history }) => (
  <LayoutWrapper>
    <StandardHeader>
      <LogoContent>
        <Link to="/">
          <h1>
            THE <BrandText>IDDOG</BrandText>
          </h1>
        </Link>
      </LogoContent>
    </StandardHeader>

    <StandardContent>
      <PosedRouter>
        <SignupPage path="/" history={history} />
        <DogsPage path="/feed" exact history={history} />
      </PosedRouter>
    </StandardContent>
  </LayoutWrapper>
);

DefaultLayout.propTypes = {
  history: PropTypes.object.isRequired,
};

PosedRouter.propTypes = {
  children: PropTypes.array,
};

export default DefaultLayout;
