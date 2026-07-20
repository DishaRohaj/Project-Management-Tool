import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifications: [],
  unreadCount: 0,
  loading: false,
  error: null,
};

const notificationSlice = createSlice({
  name: "notifications",

  initialState,

  reducers: {
    // Start Loading
    notificationStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    // Set All Notifications
    setNotifications: (state, action) => {
      state.notifications = action.payload;

      state.unreadCount = action.payload.filter(
        (notification) => !notification.isRead
      ).length;

      state.loading = false;
      state.error = null;
    },

    // Add Notification
    addNotification: (state, action) => {
      state.notifications.unshift(action.payload);

      if (!action.payload.isRead) {
        state.unreadCount += 1;
      }

      state.loading = false;
      state.error = null;
    },

    // Mark One Notification as Read
    markAsRead: (state, action) => {
      const notification = state.notifications.find(
        (item) => item._id === action.payload
      );

      if (notification && !notification.isRead) {
        notification.isRead = true;
        state.unreadCount -= 1;
      }
    },

    // Mark All Notifications as Read
    markAllAsRead: (state) => {
      state.notifications.forEach((notification) => {
        notification.isRead = true;
      });

      state.unreadCount = 0;
    },

    // Delete Notification
    deleteNotification: (state, action) => {
      const notification = state.notifications.find(
        (item) => item._id === action.payload
      );

      if (notification && !notification.isRead) {
        state.unreadCount -= 1;
      }

      state.notifications = state.notifications.filter(
        (item) => item._id !== action.payload
      );
    },

    // Clear All Notifications
    clearNotifications: (state) => {
      state.notifications = [];
      state.unreadCount = 0;
    },

    // Notification Error
    notificationFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Clear Error
    clearNotificationError: (state) => {
      state.error = null;
    },
  },
});

export const {
  notificationStart,
  setNotifications,
  addNotification,
  markAsRead,
  markAllAsRead,
  deleteNotification,
  clearNotifications,
  notificationFailure,
  clearNotificationError,
} = notificationSlice.actions;

export default notificationSlice.reducer;