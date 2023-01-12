import { 
    ADD_FILTER,
    DELETE_FILTER,
    SET_SEARCH,
    GET_RESULTS
 } from "../actions/types";

const initialState = {
    filters: [],
    search: '',
    errors: {},
    results: {}
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
            results: { ...action.payload }
        }

    default:
        return state
    }
}
