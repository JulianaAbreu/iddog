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
  padding: 8rem 4rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  grid-area: header;
  padding: 0 1rem;
  height: 10rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.85);
  span {
    border-bottom: 5px solid #f42b52;
  }
`;

const LogoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    margin: 0;
  }
  h1,
  a {
    color: white;
  }
  a {
    margin-left: 30px;
  }
`;

const DefaultLayout = () => (
  <LayoutWrapper>
    <Header>
      <LogoContent>
        <h1>THE IDDOG</h1>
      </LogoContent>
    </Header>
    <Content>
      <Route path="/" exact component={DogsPage} />
    </Content>
  </LayoutWrapper>
);

export default DefaultLayout;
