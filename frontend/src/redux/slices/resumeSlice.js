import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resume: null,
};
const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setResume(state, value) {
      state.resume = value.payload;
    },
  },
});
export const { setResume } = resumeSlice.actions;
export default resumeSlice.reducer;
