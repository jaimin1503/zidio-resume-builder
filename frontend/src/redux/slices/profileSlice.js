import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
  loading: false,
};
const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile(state, value) {
      state.signupData = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
  },
});
export const { setLoading, setProfile } = profileSlice.actions;
export default profileSlice.reducer;
