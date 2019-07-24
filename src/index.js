import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import configureStore, { history } from './state/store/configureStore';
import App from './App';

const initialState = window.initialReduxState;
export const store = configureStore(initialState);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App history={history} />
    </ConnectedRouter>
  </Provider>,
  rootElement,
);
