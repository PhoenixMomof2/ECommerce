import { combineReducers } from "redux";
// import thunk from "redux-thunk"
// import {composeWithDevTools} from "redux-devtools-extension"
// import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
// import reviewsReducer from "./reviewsReducer";
import errorsReducer from "./errorsReducer";
// import itemsReducer from "./itemsReducer";

// import all other reducers

export default combineReducers({
// const reducers = combineReducers({
    errorsReducer,
    usersReducer
    // itemsReducer,
    // reviewsReducer,
    // add all other reducers to this object.
})
// export const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk)))