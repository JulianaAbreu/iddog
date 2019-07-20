import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import DogsPage from '../../pages/DogsPage';

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 0px 8fr;
  grid-template-rows: 80px 1fr;
  grid-template-areas:
    'header header header'
    'content content content';
`;

const Content = styled.main`
  grid-area: content;
  padding: 15rem 4rem;
  display: flex;
  justify-content: center;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  grid-area: header;
  padding: 0 1rem;
  height: 20rem;
`;

const LogoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h1,
  a {
    font-weight: 100;
    color: #303030;
  }
`;

const BrandText = styled.span`
  font-weight: 600;
`;

const DefaultLayout = () => (
  <LayoutWrapper>
    <Header>
      <LogoContent>
        <h1>
          THE <BrandText>IDDOG</BrandText>
        </h1>
      </LogoContent>
    </Header>
    <Content>
      <Route path="" exact component={DogsPage} />
      <p>teste</p>
    </Content>
  </LayoutWrapper>
);

export default DefaultLayout;
