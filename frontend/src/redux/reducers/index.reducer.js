import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import profileReducer from "../slices/profileSlice";

const rootReducers = combineReducers({
  auth: authReducer,
  profile: profileReducer,
});
export default rootReducers;
