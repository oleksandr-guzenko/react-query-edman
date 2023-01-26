import { 
  GET_RECIPE_TAGS,
  ADD_RECIPE_TAG,
  RECIPE_TAGS_LOADING,
  DELETE_TAG
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
      return {
        ...state,
        recipeTags: [ ...state.recipeTags, payload ]
      }
    
    case DELETE_TAG:
      const index = state.recipeTags.findIndex(value => value.id === payload);

      if(index !== -1) state.recipeTags.splice(index, 1);

      return {
        ...state,
        recipeTags: [ ...state.recipeTags ]
      }

    default:
      return state
  }
}
