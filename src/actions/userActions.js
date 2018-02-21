import * as types from './actionTypes';
import usersApi from "../api/usersApi";

export const loadUserLoginSuccess = (successResponse) =>{
    return {type: types.LOAD_USER_LOGIN_SUCCESS, successResponse}
};

export function loadUsersSuccess(users) {
    return {type: types.LOAD_USERS_SUCCESS, users};
}

export const updateUserSignupForm = (user) =>{
    return {type: types.LOAD_USER_MODEL, user};
};

export const updateUserSignInForm = (user) =>{
    return {type: types.LOAD_USER_MODEL, user};
};

export const loadUsers = ()=> {
    // make async call to api, handle promise, dispatch action when promise is resolved
    return function(dispatch) {
        return usersApi.getUsersList((users) => {
            dispatch(loadUsersSuccess(users.data));
        });
    };
};

export const loginUser = (user) =>{
    // make async call to api, handle promise, dispatch action when promise is resolved
    return function(dispatch) {
        return usersApi.postUserLogin(user, (response) => {
            dispatch(loadUserLoginSuccess(response));
        });
    };
};
