import {
    REGISTER_USER,
    REGISTER_USER_ERROR,
} from '../utilities/actionTypes';

const initialState = {
    registerUser: {},
    registerErrors: [],
};

export const authReducer = (state = initialState, action) => {
    if ( action.type === REGISTER_USER ) {
        return Object.assign({}, state, {
            registerUser: action.payload });
    } else if ( action.type === REGISTER_USER_ERROR ) {
        return Object.assign({}, state, {
            registerErrors: action.payload });
    } 
    return state;
};
