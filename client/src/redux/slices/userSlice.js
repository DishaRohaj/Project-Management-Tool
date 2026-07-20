import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUser: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",

  initialState,

  reducers: {
    // Start Loading
    userStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    // Set All Users
    setUsers: (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.error = null;
    },

    // Set Current User
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },

    // Add User
    addUser: (state, action) => {
      state.users.unshift(action.payload);
      state.loading = false;
      state.error = null;
    },

    // Update User
    updateUser: (state, action) => {
      const updatedUser = action.payload;

      state.users = state.users.map((user) =>
        user._id === updatedUser._id ? updatedUser : user
      );

      if (
        state.currentUser &&
        state.currentUser._id === updatedUser._id
      ) {
        state.currentUser = updatedUser;
      }

      state.loading = false;
      state.error = null;
    },

    // Delete User
    deleteUser: (state, action) => {
      const userId = action.payload;

      state.users = state.users.filter(
        (user) => user._id !== userId
      );

      if (
        state.currentUser &&
        state.currentUser._id === userId
      ) {
        state.currentUser = null;
      }

      state.loading = false;
      state.error = null;
    },

    // User Error
    userFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Clear Current User
    clearCurrentUser: (state) => {
      state.currentUser = null;
    },

    // Clear Error
    clearUserError: (state) => {
      state.error = null;
    },
  },
});

export const {
  userStart,
  setUsers,
  setCurrentUser,
  addUser,
  updateUser,
  deleteUser,
  userFailure,
  clearCurrentUser,
  clearUserError,
} = userSlice.actions;

export default userSlice.reducer;