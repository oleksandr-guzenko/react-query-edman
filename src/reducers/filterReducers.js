import { 
    ADD_FILTER,
    DELETE_FILTER,
    SET_SEARCH,
    GET_RESULTS,
    DO_SEARCH
 } from "../actions/types";

const initialState = {
    filters: [],
    search: '',
    errors: {},
    results: {},
    loading: false
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
            loading: false
        }
    
    case DO_SEARCH:
        return {
            ...state,
            loading: true,
            results: {
                hits: []
            }
        }
    
    default:
        return state
    }
}
