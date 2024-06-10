import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import profileReducer from "../slices/profileSlice";
import resumeReducer from "../slices/resumeSlice";

const rootReducers = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  resume: resumeReducer,
});
export default rootReducers;
