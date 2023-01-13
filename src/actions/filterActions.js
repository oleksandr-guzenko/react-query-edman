import axios from 'axios';
import Swal from 'sweetalert2';

import store from '../store';

import {
    ADD_FILTER,
    DELETE_FILTER,
    SET_SEARCH,
    GET_RESULTS,
    DO_SEARCH
} from './types';

// description - add a nutrient filter from nutrients
// params - all nutrient filters selected

export const addFilter = (filters) => ({
  type: ADD_FILTER,
  payload: filters
});

// description - remove a nutrient filter from selected filter list
// params - index of a nutrient filter to be removed

export const deleteFilter = (index) => ({
    type: DELETE_FILTER,
    payload: index
});


// description - set the keyword for search
// params - keyword for search

export const setSearch = (qstring) => ({
  type: SET_SEARCH,
  payload: qstring
})

// description - search data from Edman API with selected nutrient filters and keyword

export const doSearch = () => {
  const query = store.getState().filters;

  // display error alert when no keyword for search
  
  if(query.search === '') {
    Swal.fire({
      icon: 'error',
      title: 'Errors',
      text: 'You need to type keywords for searching'
    });

    return;
  }

  const params = {};

  store.dispatch({
    type: DO_SEARCH,
    payload: null
  });

  // set the query for Edman API

  params.q = query.search;
  params['app_id'] = process.env.REACT_APP_API_ID;
  params['app_key'] = process.env.REACT_APP_API_KEY;

  // set the nutrients query for Edman API

  for(let i = 0; i < query.filters.length; i ++) {
    const filter = query.filters[i];
    params[`nutrients%5B${filter.type.toUpperCase()}%5D`] = `${filter.min}-${filter.max}`;
  }

  // request and get responses from Edman API

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
}