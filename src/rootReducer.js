import { combineReducers } from "redux";
import { appReducer } from "./modules/AppReducer";

/**
 * This function combines all the reducers into on object which updates the states of the redux store
 */
export default combineReducers({
    rootApp: appReducer
});
