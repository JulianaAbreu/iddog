import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import DefaultLayout from './views/layouts/DefaultLayout';

const GlobalStyle = createGlobalStyle`
  * {
    padding:0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }
`;

const App = ({ history }) => (
  <div className="App">
    <BrowserRouter>
      <Route path="/" component={DefaultLayout} history={history} />
    </BrowserRouter>
    <GlobalStyle />
  </div>
);

App.propTypes = {
  history: PropTypes.object.isRequired,
};

export default App;
