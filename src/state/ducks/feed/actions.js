import types from './types';
import { get, getQueryParams } from '../../../utils/request';

function listFeed(params) {
  return {
    type: types.LIST_FEED,
    promise: get(`feed${getQueryParams(params)}`),
  };
}

export default {
  listFeed,
};
