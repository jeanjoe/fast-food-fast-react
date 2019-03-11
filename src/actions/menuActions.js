import axios from "axios";
import { GET_USER_MENU, GET_USER_MENU_ERROR } from "../utilities/actionTypes";
// const token = localStorage.getItem("auth_token");

export const getMenus = () => dispatch => {
  axios
    .get("https://manzede-fast-food-fast-3.herokuapp.com/api/v1/users/menus", {
      headers: {
        "Content-type": "application/json",
        // Authorization: `Bearer ${token}`
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
