import { 
  GET_RECIPE_TAGS,
  ADD_RECIPE_TAG,
  RECIPE_TAGS_LOADING
 } from "../actions/types";

const initialState = {
  recipeTags: [],
  loading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RECIPE_TAGS_LOADING:
      return {
        ...state,
        loading: true
      }

    case GET_RECIPE_TAGS:
      return { 
        ...state, 
        loading: false,
        recipeTags: [ ...payload ] 
      }
    
    case ADD_RECIPE_TAG:
      {
        if(payload.length > 0) {
          const recipe_id = payload[0].recipe_ID;

          const newRecipeTags = state.recipeTags.filter(value => value.recipe !== recipe_id);

          return { 
            ...state, 
            loading: false,
            recipeTags: [ ...newRecipeTags, ...payload ]
          }
        } else return { ...state }
      }
      
    default:
      return state
  }
}
