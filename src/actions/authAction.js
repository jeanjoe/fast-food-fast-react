import axios from "axios";
const baseUrl = "https://manzede-fast-food-fast-3.herokuapp.com/api/v1/users/";

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
