import axios from "axios";
import { GET_USER_MENU, GET_USER_MENU_ERROR } from "../utilities/actionTypes";
const baseUrl = "https://manzede-fast-food-fast-3.herokuapp.com/api/v1/users/";
const token = localStorage.getItem("auth_token");

export const registerUser = data => dispatch => {
  axios
    .post(`${baseUrl}register`, data, {
      headers: {
        "content-type": "application/json"
      }
    })
    .then(response => {
      dispatch({
        type: "REGISTER_USER",
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: "REGISTER_USER_ERROR",
        payload: error.response
      });
    });
};

export const loginUser = data => dispatch => {
  axios
    .post(`${baseUrl}login`, data, {
      headers: { "content-type": "application/json" }
    })
    .then(response => {
      axios.defaults.headers.common.Authorization = `Bearer ${
        response.data.user_token
      }`;
      dispatch({
        type: "LOGIN_USER",
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: "LOGIN_USER_ERROR",
        payload: error
      });
    });
};

export const getMenus = () => dispatch => {
  axios
    .get(`${baseUrl}users/menus`, {
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
