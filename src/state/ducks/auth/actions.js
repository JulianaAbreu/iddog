import types from './types';
import { post } from '../../../utils/request';

function login(email) {
  return {
    type: types.LOGIN,
    promise: post(`signup`, email),
    meta: {
      onSuccess: (response) =>
        localStorage.setItem('token', response.user.token),
    },
  };
}

export default {
  login,
};
