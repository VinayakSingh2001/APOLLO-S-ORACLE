import bufferSlice from "./bufferSlice";
import usersSlice from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    users: usersSlice,
    loader: bufferSlice
  },
});

export default store;
