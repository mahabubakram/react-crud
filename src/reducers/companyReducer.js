import * as types from '../actions/actionTypes';
import {companyModel} from "../models/company";


export default function companyReducer(state = companyModel, action) {
    switch(action.type) {
        case types.LOAD_COMPANY_MODEL:
            return Object.assign({}, state, action.company);
        default:
            return state;
    }
}