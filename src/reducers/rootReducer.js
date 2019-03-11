import { combineReducers } from "redux";
import { authReducer } from "../reducers/authReducer";
import { menuReducer } from "../reducers/menuReducer";

export default combineReducers({
  authReducer,
  menuReducer,
});
