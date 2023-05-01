import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import errorsReducer from "./errorsReducer";
// import all other reducers

export default combineReducers({
    errorsReducer,
    usersReducer,
    // add all other reducers to this object.

})