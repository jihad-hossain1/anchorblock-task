import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageNumber: 1,
  userSearch: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    changePageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    searchUser: (state, action) => {
      state.userSearch = action.payload;
      // console.log(object);
    },
    clearSearchUser: (state) => {
      state.userSearch = "";
    },
  },
});

export default userSlice.reducer;
export const { changePageNumber, searchUser, clearSearchUser } =
  userSlice.actions;
