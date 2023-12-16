import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCrednt) => {
    // console.log(userCrednt);

    const request = await fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(userCrednt),
      headers: {
        "Content-type": "application/json",
      },
    });
    const res = await request;
    if (res.ok) {
      localStorage.setItem("user", JSON.stringify(userCrednt));
    }
    return res;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        console.log(action.error.message);
        if (action.error.message === "request failed with status code 404") {
          state.error = "access denied! invalid credentials";
        } else {
          state.error = action.error.message;
        }
      });
  },
});

export default userSlice.reducer;
