import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./fetures/api/baseApi";
import userReducer from "./fetures/UserSlice";
import usersSlice from "./fetures/usersSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    [baseApi.reducerPath]: baseApi.reducer,
    users: usersSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
