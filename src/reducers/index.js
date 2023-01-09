import { combineReducers } from "redux";
import filterReducers from "./filterReducers";

export default combineReducers({
    filters: filterReducers
});