import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
  loading: false,
};
const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile(state, action) {
      state.signupData = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});
export const { setLoading, setProfile } = profileSlice.actions;
export default profileSlice.reducer;
