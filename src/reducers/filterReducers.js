import { 
    ADD_FILTER,
    DELETE_FILTER,
    SET_SEARCH,
    GET_RESULTS,
    DO_SEARCH,
    LOAD_MORE
 } from "../actions/types";

const initialState = {
    filters: [], // all selected nutrients filters 
    search: '', // keyword for search
    results: {}, // results from Edman API
    loading: false, // loading state while waiting responses from Edman API
    recipes: [] // recipes from Edman API response
}

export default (state = initialState, action) => {
    switch (action.type) {
    case ADD_FILTER:
        return { 
            ...state, 
            filters: [ ...action.payload ] 
        };

    case DELETE_FILTER:
        return { 
            ...state, 
            filters: [ ...action.payload ]
        };
    
    case SET_SEARCH:
        return {
            ...state,
            search: action.payload
        }

    case GET_RESULTS:
        return {
            ...state,
            results: { ...action.payload },
            recipes: [ ...action.payload.hits ],
            loading: false
        }
    
    case DO_SEARCH:
        return {
            ...state,
            loading: true,
            results: {},
            recipes: []
        }
    
    case LOAD_MORE: 
        return {
            ...state,
            results: { ...action.payload },
            recipes: [ ...state.recipes, ...action.payload.hits ]
        }

    default:
        return state
    }
}
