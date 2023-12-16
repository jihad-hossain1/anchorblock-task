import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageNumber: 1,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    changePageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { changePageNumber } = userSlice.actions;
