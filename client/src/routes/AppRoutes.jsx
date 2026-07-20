import { Routes, Route, Navigate } from "react-router-dom";

// Authentication Pages
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";

// Dashboard Pages
import Dashboard from "../pages/dashboard/Dashboard";
import Projects from "../pages/dashboard/Projects";
import ProjectDetails from "../pages/dashboard/ProjectDetails";
import Tasks from "../pages/dashboard/Tasks";
import CreateTask from "../pages/dashboard/CreateTask";
import Team from "../pages/dashboard/Team";
import Profile from "../pages/dashboard/Profile";
import Settings from "../pages/dashboard/Settings";

// Error Page
import NotFound from "../pages/notFound/NotFound";

// Layout
import Layout from "../components/layout/Layout";

// Protected Route
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      {/* Redirect */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      {/* Protected Routes */}
      <Route
        element={
         <ProtectedRoute>
           <Layout />
         </ProtectedRoute> 
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/create-task" element={<CreateTask />} />
        <Route path="/team" element={<Team />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;