import axios from 'axios';

import store from '../store';

import {
    ADD_FILTER,
    DELETE_FILTER,
    SET_SEARCH,
    GET_RESULTS
} from './types';

export const addFilter = (filter) => ({
  type: ADD_FILTER,
  payload: filter
});

export const deleteFilter = (index) => ({
    type: DELETE_FILTER,
    payload: index
});

export const setSearch = (qstring) => ({
  type: SET_SEARCH,
  payload: qstring
})

export const doSearch = () => {
  const query = store.getState().filters;
  const params = {};

  params.q = query.search;
  params['app_id'] = process.env.REACT_APP_API_ID;
  params['app_key'] = process.env.REACT_APP_API_KEY;

  for(let i = 0; i < query.filters.length; i ++) {
    const filter = query.filters[i];
    params[`nutrients%5B${filter.type.toUpperCase()}%5D`] = `${filter.min}-${filter.max}`;
  }

  axios
    .get('https://api.edamam.com/search', {
      params: params
    })
    .then(res => {
      store.dispatch({
        type: GET_RESULTS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));

  console.log(params);
}