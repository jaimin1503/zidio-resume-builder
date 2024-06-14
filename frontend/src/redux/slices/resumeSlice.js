import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resume: null,
  formData: {
    details: {},
    currentStep: 0,
  },
};
const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setResume(state, value) {
      state.resume = value.payload;
    },
    setFormData(state, value) {
      state.formData = value.payload;
    },
  },
});
export const { setResume,setFormData } = resumeSlice.actions;
export default resumeSlice.reducer;
