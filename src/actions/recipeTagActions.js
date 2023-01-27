import axios from "axios";

import { 
  GET_RECIPE_TAGS,
  ADD_RECIPE_TAG,
  RECIPE_TAGS_LOADING,
  DELETE_TAG
} from "./types";
import store from "../store.js";

const server_url = 'https://dragonwarrior987600.pythonanywhere.com';

/**
 * get all recipe tags from the backend
 * @function
 */
export const getRecipeTags = () => {
  axios
    .get(`${server_url}/api/recipe-tags/`)
    .then(res => {
      store.dispatch({
        type: GET_RECIPE_TAGS,
        payload: res.data
      })
    })
    .catch(err => console.log(err));
}

/**
 * add a custom tag to a recipe
 * @function
 * @param {string} tag_ID - id of a custom tag to be added to a recipe, id means the id stored in the database table
 * @param {string} recipe_ID - uri of a recipe from the Edman API
 */
export const addRecipeTag = (tag_ID, recipe_ID) => {
  // element to show loading while waiting for responses from server
  const loadingElement = document.getElementById(`loading-${recipe_ID}-${tag_ID}`);


  loadingElement.className = 'fa fa-spinner fa-spin';

  axios
    .post(`${server_url}/api/recipe-tags/`, {
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

/**
 * delete a custom tag added from a recipe
 * @function
 * @param {string} recipe_id - uri of the recipe which you want to delete a custom tag added from
 * @param {string} tag_id - id of the custom tag added to a recipe, id means the id stored in the database table
 */
export const deleteRecipeTag = (recipe_id, tag_id) => {
  // element to show loading while waiting for responses from server
  const loadingElement = document.getElementById(`loading-${recipe_id}`);

  loadingElement.className = 'fa fa-spinner fa-spin';

  axios
    .delete(`${server_url}/api/recipe-tags/${recipe_id}/`)
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