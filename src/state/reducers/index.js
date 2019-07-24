import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth from '../ducks/auth';
import feed from '../ducks/feed';

export function createRootReducer(history) {
  return combineReducers({
    auth,
    feed,
    router: connectRouter(history),
  });
}
