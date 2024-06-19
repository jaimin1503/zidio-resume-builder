import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resume: null,
  personalDetails: null,
  contactDetails: null,
  educationDetails: null,
  experienceDetails: null,
  certificationsDetails: null,
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setResume(state, action) {
      state.resume = action.payload;
    },
    setPersonalDetails(state, action) {
      state.personalDetails = action.payload;
    },
    setContactDetails(state, action) {
      state.contactDetails = action.payload;
    },
    setEducationDetails(state, action) {
      state.educationDetails = action.payload;
    },
    setExperienceDetails(state, action) {
      state.experienceDetails = action.payload;
    },
    setCertificationsDetails(state, action) {
      state.certificationsDetails = action.payload;
    },
  },
});

export const {
  setResume,
  setPersonalDetails,
  setContactDetails,
  setEducationDetails,
  setExperienceDetails,
  setCertificationsDetails,
} = resumeSlice.actions;

export default resumeSlice.reducer;
