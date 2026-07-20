import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
  currentProject: null,
  loading: false,
  error: null,
};

const projectSlice = createSlice({
  name: "projects",

  initialState,

  reducers: {
    // Start Loading
    projectStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    // Get All Projects
    setProjects: (state, action) => {
      state.projects = action.payload;
      state.loading = false;
      state.error = null;
    },

    // Get Single Project
    setCurrentProject: (state, action) => {
      state.currentProject = action.payload;
      state.loading = false;
      state.error = null;
    },

    // Add Project
    addProject: (state, action) => {
      state.projects.unshift(action.payload);
      state.loading = false;
      state.error = null;
    },

    // Update Project
    updateProject: (state, action) => {
      const updatedProject = action.payload;

      state.projects = state.projects.map((project) =>
        project._id === updatedProject._id ? updatedProject : project
      );

      if (
        state.currentProject &&
        state.currentProject._id === updatedProject._id
      ) {
        state.currentProject = updatedProject;
      }

      state.loading = false;
      state.error = null;
    },

    // Delete Project
    deleteProject: (state, action) => {
      const projectId = action.payload;

      state.projects = state.projects.filter(
        (project) => project._id !== projectId
      );

      if (
        state.currentProject &&
        state.currentProject._id === projectId
      ) {
        state.currentProject = null;
      }

      state.loading = false;
      state.error = null;
    },

    // Project Error
    projectFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Clear Current Project
    clearCurrentProject: (state) => {
      state.currentProject = null;
    },

    // Clear Error
    clearProjectError: (state) => {
      state.error = null;
    },
  },
});

export const {
  projectStart,
  setProjects,
  setCurrentProject,
  addProject,
  updateProject,
  deleteProject,
  projectFailure,
  clearCurrentProject,
  clearProjectError,
} = projectSlice.actions;

export default projectSlice.reducer;