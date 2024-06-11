import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  globalIndex: 0,
};

const globalIndexSlice = createSlice({
  name: "globalIndex",
  initialState,
  reducers: {
    setGlobalIndex(state, action) {
      state.globalIndex = action.payload;
    },
  },
});

export const { setGlobalIndex } = globalIndexSlice.actions;
export default globalIndexSlice.reducer;
