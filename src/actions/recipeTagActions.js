import axios from "axios";

import { 
  GET_RECIPE_TAGS,
  ADD_RECIPE_TAG,
  RECIPE_TAGS_LOADING,
  DELETE_TAG
} from "./types";
import store from "../store.js";

export const getRecipeTags = () => {
  axios
    .get('/api/recipe-tags/')
    .then(res => {
      store.dispatch({
        type: GET_RECIPE_TAGS,
        payload: res.data
      })
    })
    .catch(err => console.log(err));
}

export const addRecipeTag = (tag_ID, recipe_ID) => {
  const loadingElement = document.getElementById(`loading-${recipe_ID}-${tag_ID}`);


  loadingElement.className = 'fa fa-spinner fa-spin';

  axios
    .post('/api/recipe-tags/', {
      tag_ID,
      recipe_ID
    })
    .then(res => {
      store.dispatch({
        type: ADD_RECIPE_TAG,
        payload: res.data
      });

      loadingElement.className = 'fa fa-plus';
    })
    .catch(err => {
      console.log(err);
      loadingElement.className = 'fa fa-plus';
    });
}

export const deleteRecipeTag = (recipe_id, tag_id) => {
  console.log(`loading-${recipe_id}`)
  const loadingElement = document.getElementById(`loading-${recipe_id}`);

  loadingElement.className = 'fa fa-spinner fa-spin';

  axios
    .delete(`/api/recipe-tags/${recipe_id}/`)
    .then(res => {
      store.dispatch({
        type: DELETE_TAG,
        payload: recipe_id
      });

      loadingElement.className = 'fa fa-remove';
    })
    .catch(err => {
      console.log(err);
      loadingElement.className = 'fa fa-remove';
    });
}