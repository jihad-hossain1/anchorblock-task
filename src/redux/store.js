import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./fetures/api/baseApi";
import userReducer from "./fetures/UserSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
