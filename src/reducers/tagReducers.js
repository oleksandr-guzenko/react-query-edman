import { 
  GET_TAGS,
  ADD_TAG,
  UPDATE_TAG,
  TAGS_LOADING,
  TAG_ERRORS
 } from "../actions/types";

const initialState = {
  tags: [],
  loading: false,
  errors: {}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TAGS_LOADING:
      return {
        ...state,
        loading: true
      }

    case GET_TAGS:
      return { 
        ...state, 
        tags: [ ...payload ],
        loading: false
      }

    case ADD_TAG:
      return { 
        ...state, 
        tags: [ ...state.tags, payload ],
        errors: {} 
      }
    
    case UPDATE_TAG:
      {
        const index = state.tags.findIndex(value => value.id === payload.id);

        if(index !== -1) state.tags[index] = payload;
        
        return {
          ...state,
          tags: [ ...state.tags ]
        }
      }
    
    case TAG_ERRORS: 
      return {
        ...state,
        errors: { ...state.errors, ...payload }
      }
    default:
      return state
  }
}
