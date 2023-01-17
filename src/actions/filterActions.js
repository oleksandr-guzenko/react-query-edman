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

/** 
 * Add a nutrient filter from nutrients
 * @function
 * @param {Object[]} filters - array of all nutrient filters selected
 */
export const addFilter = (filters) => ({
  type: ADD_FILTER,
  payload: filters
});

/** 
 * Remove a nutrient filter from selected filter list
 * @function
 * @param {number} index - index of a nutrient filter to be removed
 */
export const deleteFilter = (index) => ({
    type: DELETE_FILTER,
    payload: index
});

/** 
 * Set the keyword for search
 * @function
 * @param {string} qstring - keyword for search
 */
export const setSearch = (qstring) => ({
  type: SET_SEARCH,
  payload: qstring
})

/** 
 * Search data from Edam API with selected nutrient filters and keyword
 * @function
 */
export const doSearch = () => {
  const query = store.getState().filters;

  // Display error alert when no keyword for search
  
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

  // Set the query for Edman API

  params.q = query.search;
  params.type = 'any';
  params['app_id'] = process.env.REACT_APP_API_ID;
  params['app_key'] = process.env.REACT_APP_API_KEY;

  // Set the nutrients query for Edman API

  for(let i = 0; i < query.filters.length; i ++) {
    const filter = query.filters[i];
    params[`nutrients%5B${filter.tag}%5D`] = `${filter.min}-${filter.max}`;
  }

  // Request and fetch data from Edman API

  axios
    .get('https://api.edamam.com/api/recipes/v2', {
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