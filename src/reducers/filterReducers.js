import { 
    ADD_FILTER,
    DELETE_FILTER
 } from "../actions/types";

const initialState = []

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case ADD_FILTER:
        return [ payload, ...state ]
    case DELETE_FILTER:
        state.splice(payload, 1);
        return [...state];

    default:
        return state
    }
}
