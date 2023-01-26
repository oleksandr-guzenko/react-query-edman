import axios from "axios";

import { 
  GET_RECIPE_TAGS,
  ADD_RECIPE_TAG,
  RECIPE_TAGS_LOADING
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
    .then(res => ({
      type: ADD_RECIPE_TAG,
      payload: res.data
    }))
    .catch(err => console.log(err));
}