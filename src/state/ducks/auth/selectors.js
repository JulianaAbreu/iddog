import { createSelector } from 'reselect';

const selectSignup = ({ auth: { signup } }) => signup;
const makeSelectSignup = () =>
  createSelector(
    selectSignup,
    ({ data }) => data,
  );
const makeSelectSignupIsLoading = () =>
  createSelector(
    selectSignup,
    ({ isLoading }) => isLoading,
  );
const makeSelectSignupError = () =>
  createSelector(
    selectSignup,
    ({ error }) => error,
  );

export default {
  // SIGN UP
  selectSignup,
  makeSelectSignup,
  makeSelectSignupIsLoading,
  makeSelectSignupError,
};
