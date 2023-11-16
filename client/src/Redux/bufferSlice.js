import { createSlice } from "@reduxjs/toolkit";

export const bufferSlice = createSlice({
  name: "buffer",
  initialState: {
    loading: false,
  },
  reducers: {
    ShowLoading(state) {
      state.loading = true;
    },
    HideLoading(state) {
      state.loading = false;
    },
  },
});

export const { ShowLoading, HideLoading } = bufferSlice.actions;
export default bufferSlice.reducer;
