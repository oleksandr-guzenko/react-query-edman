import { combineReducers } from "redux";
import filterReducers from "./filterReducers";
import tagReducers from "./tagReducers";

export default combineReducers({
    filters: filterReducers,
    tags: tagReducers
});