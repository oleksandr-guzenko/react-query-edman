import {
    ADD_FILTER,
    DELETE_FILTER
} from './types';

export const addFilter = (filter) => ({
  type: ADD_FILTER,
  payload: filter
});

export const deleteFilter = (index) => ({
    type: DELETE_FILTER,
    payload: index
});