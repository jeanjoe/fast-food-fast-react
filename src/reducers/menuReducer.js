import {
  GET_USER_MENU,
  GET_USER_MENU_ERROR,
  POST_USER_ORDER,
  POST_USER_ORDER_ERROR,
  GET_USER_ORDER,
  GET_USER_ORDER_ERROR
} from "../utilities/actionTypes";

const initialState = {
  menus: [],
  errors: [],
  order: {},
  orderError: [],
  orderHistory: [],
  orderHistoryError: []
};

export const menuReducer = (state = initialState, action) => {
  if (action.type === GET_USER_MENU) {
    return Object.assign({}, state, {
      menus: action.payload
    });
  } else if (action.type === GET_USER_MENU_ERROR) {
    return Object.assign({}, state, {
      errors: action.payload
    });
  } else if (action.type === POST_USER_ORDER) {
    return Object.assign({}, state, {
      order: action.payload
    });
  } else if (action.type === POST_USER_ORDER_ERROR) {
    return Object.assign({}, state, {
      orderError: action.payload
    });
  } else if (action.type === GET_USER_ORDER) {
    return Object.assign({}, state, {
      orderHistory: action.payload
    });
  } else if (action.type === GET_USER_ORDER_ERROR) {
    return Object.assign({}, state, {
      orderHistoryError: action.payload
    });
  }
  return state;
};

export default menuReducer;
