import { combineReducers } from "redux";
import filterReducers from "./filterReducers";
import tagReducers from "./tagReducers";
import recipeTagReducers from "./recipeTagReducers";

export default combineReducers({
    filters: filterReducers,
    tags: tagReducers,
    recipeTags: recipeTagReducers
});