import { createSelector } from 'reselect';

const selectFeed = ({ feed: { listFeed } }) => listFeed;
const makeSelectFeed = () =>
  createSelector(
    selectFeed,
    ({ data }) => data,
  );
const makeSelectFeedIsLoading = () =>
  createSelector(
    selectFeed,
    ({ isLoading }) => isLoading,
  );
const makeSelectFeedError = () =>
  createSelector(
    selectFeed,
    ({ error }) => error,
  );

export default {
  // LIST
  selectFeed,
  makeSelectFeed,
  makeSelectFeedIsLoading,
  makeSelectFeedError,
};
