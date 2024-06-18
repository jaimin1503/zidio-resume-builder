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
    setResume(state, action) {
      state.resume = action.payload;
    },
    setFormData(state, action) {
      state.formData = action.payload;
    },
  },
});
export const { setResume, setFormData } = resumeSlice.actions;
export default resumeSlice.reducer;
