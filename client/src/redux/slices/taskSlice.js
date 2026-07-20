import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  currentTask: null,
  loading: false,
  error: null,
};

const taskSlice = createSlice({
  name: "tasks",

  initialState,

  reducers: {
    // Start Loading
    taskStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    // Get All Tasks
    setTasks: (state, action) => {
      state.tasks = action.payload;
      state.loading = false;
      state.error = null;
    },

    // Get Single Task
    setCurrentTask: (state, action) => {
      state.currentTask = action.payload;
      state.loading = false;
      state.error = null;
    },

    // Add Task
    addTask: (state, action) => {
      state.tasks.unshift(action.payload);
      state.loading = false;
      state.error = null;
    },

    // Update Task
    updateTask: (state, action) => {
      const updatedTask = action.payload;

      state.tasks = state.tasks.map((task) =>
        task._id === updatedTask._id ? updatedTask : task
      );

      if (
        state.currentTask &&
        state.currentTask._id === updatedTask._id
      ) {
        state.currentTask = updatedTask;
      }

      state.loading = false;
      state.error = null;
    },

    // Delete Task
    deleteTask: (state, action) => {
      const taskId = action.payload;

      state.tasks = state.tasks.filter(
        (task) => task._id !== taskId
      );

      if (
        state.currentTask &&
        state.currentTask._id === taskId
      ) {
        state.currentTask = null;
      }

      state.loading = false;
      state.error = null;
    },

    // Change Task Status
    updateTaskStatus: (state, action) => {
      const { taskId, status } = action.payload;

      const task = state.tasks.find(
        (task) => task._id === taskId
      );

      if (task) {
        task.status = status;
      }

      if (
        state.currentTask &&
        state.currentTask._id === taskId
      ) {
        state.currentTask.status = status;
      }
    },

    // Assign User to Task
    assignTaskUser: (state, action) => {
      const { taskId, assignedTo } = action.payload;

      const task = state.tasks.find(
        (task) => task._id === taskId
      );

      if (task) {
        task.assignedTo = assignedTo;
      }

      if (
        state.currentTask &&
        state.currentTask._id === taskId
      ) {
        state.currentTask.assignedTo = assignedTo;
      }
    },

    // Task Error
    taskFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Clear Current Task
    clearCurrentTask: (state) => {
      state.currentTask = null;
    },

    // Clear Error
    clearTaskError: (state) => {
      state.error = null;
    },
  },
});

export const {
  taskStart,
  setTasks,
  setCurrentTask,
  addTask,
  updateTask,
  deleteTask,
  updateTaskStatus,
  assignTaskUser,
  taskFailure,
  clearCurrentTask,
  clearTaskError,
} = taskSlice.actions;

export default taskSlice.reducer;