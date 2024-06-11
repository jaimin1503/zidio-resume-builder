import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import profileReducer from "../slices/profileSlice";
import resumeReducer from "../slices/resumeSlice";
import globalIndexReducer from "../slices/globalIndexSlice";

const rootReducers = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  resume: resumeReducer,
  globalIndex: globalIndexReducer,
});
export default rootReducers;
