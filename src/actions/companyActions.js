import * as types from './actionTypes';


export const updateCompanySignupForm = (company) =>{
    return {type: types.LOAD_COMPANY_MODEL, company};
};