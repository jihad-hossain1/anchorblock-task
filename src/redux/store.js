import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./fetures/users/userSlice";

const store = configureStore({
  reducer: {
    userSlice: userSlice,
  },
});

export default store;
