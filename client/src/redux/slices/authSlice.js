import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  isAuthenticated: !!localStorage.getItem("token"),
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    // Start Loading
    authStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    // Login/Register Success
    authSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.error = null;

      localStorage.setItem("token", action.payload.token);
    },

    // Update User Profile
    updateUser: (state, action) => {
      state.user = action.payload;
    },

    // Authentication Failed
    authFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },

    // Logout
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.loading = false;
      state.error = null;
      state.isAuthenticated = false;

      localStorage.removeItem("token");
    },

    // Clear Error
    clearError: (state) => {
      state.error = null;
    },

    // Stop Loading
    stopLoading: (state) => {
      state.loading = false;
    },
  },
});

export const {
  authStart,
  authSuccess,
  authFailure,
  logout,
  updateUser,
  clearError,
  stopLoading,
} = authSlice.actions;

export default authSlice.reducer;