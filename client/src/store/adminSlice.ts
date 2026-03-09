import { createSlice } from "@reduxjs/toolkit";
import { api } from "./api";

interface AdminState {
  isAuthenticated: boolean;
}

const initialState: AdminState = {
  isAuthenticated: false,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.checkAdmin.matchFulfilled, (state) => {
      state.isAuthenticated = true;
    });
  },
});

export const { logout } = adminSlice.actions;
export default adminSlice.reducer;
