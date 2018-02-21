import { combineReducers } from 'redux'
import { default as user} from "./userReducer";
import userListReducer from "./userListReducer";
import { default as company } from "./companyReducer";

export default combineReducers({
    user,
    userListReducer,
    company
});