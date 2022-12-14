import { combineReducers } from "redux";
import handleTaskReducer from "./handleTaskReducer";
import loadingReducer from "./loadingReducer";

export default combineReducers({
    handleTaskReducer, 
    loadingReducer
});