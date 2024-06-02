import { combineReducers } from "redux";
import authReducer from "./auth"; 
import currentUserReducer from './currentUser'
import questionReducer from './questions'

const rootReducer = combineReducers({
     authReducer , currentUserReducer, questionReducer
});

export default rootReducer;
