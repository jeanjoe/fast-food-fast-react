import axios from 'axios';

export const registerUser = data => dispatch => {
    axios.post('https://manzede-fast-food-fast-3.herokuapp.com/api/v1/users/register', data, {
        headers :{
            'content-type': 'application/json',
        }
    })
    .then(response => {
        dispatch({
            type: 'REGISTER_USER',
            payload: response.data
        });
    })
    .catch(error => {
        dispatch({
            type: 'REGISTER_USER_ERROR',
            payload: error.response
        });
    })
};
