import axios from "axios";
import {
  GET_USER_MENU,
  GET_USER_MENU_ERROR,
  POST_USER_ORDER,
  POST_USER_ORDER_ERROR,
  GET_USER_ORDER,
  GET_USER_ORDER_ERROR
} from "../utilities/actionTypes";
const token = localStorage.getItem("auth_token");
const url = "https://manzede-fast-food-fast-3.herokuapp.com/api/v1/";

export const getMenus = () => dispatch => {
  axios
    .get(`${url}users/menus`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      dispatch({
        type: GET_USER_MENU,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: GET_USER_MENU_ERROR,
        payload: error
      });
    });
};


export const postUserOrder = (data) => dispatch => {
  axios
    .post(`${url}users/orders`, data, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      dispatch({
        type: POST_USER_ORDER,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: POST_USER_ORDER_ERROR,
        payload: error
      });
    });
};


export const getOrderHistory = () => dispatch => {
  axios
    .get(`${url}users/orders`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      dispatch({
        type: GET_USER_ORDER,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: GET_USER_ORDER_ERROR,
        payload: error
      });
    });
};