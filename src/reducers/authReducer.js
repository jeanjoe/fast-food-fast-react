import {
  REGISTER_USER,
  REGISTER_USER_ERROR,
  LOGIN_USER,
  LOGIN_USER_ERROR
} from "../utilities/actionTypes";

const initialState = {
  registerUser: {},
  registerErrors: [],
  user: {},
  errors: []
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return Object.assign({}, state, {
        registerUser: action.payload
      });
    case REGISTER_USER_ERROR:
      return Object.assign({}, state, {
        registerErrors: action.payload
      });
    case LOGIN_USER:
      return Object.assign({}, state, {
        user: action.payload
      });
    case LOGIN_USER_ERROR:
      return Object.assign({}, state, {
        errors: action.payload
      });
    default:
      return state;
  }
};

export default authReducer;
