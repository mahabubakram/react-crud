import * as types from '../actions/actionTypes';
import {userModel, userSignupModel} from "../models/user";


export default function userReducer(state = userSignupModel, action) {
    switch(action.type) {
        case types.LOAD_USER_MODEL:
            return Object.assign({}, state, action.user);
        case types.LOAD_USER_LOGIN_SUCCESS:
            return action.successResponse;
        default:
            return state;
    }
}