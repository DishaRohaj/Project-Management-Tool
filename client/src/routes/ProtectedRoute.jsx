import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  // Get authentication state from Redux
  const { user, token, loading } = useSelector((state) => state.auth);

  // Show loading while checking authentication
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-100">
        <div className="text-lg font-semibold text-blue-600">
          Loading...
        </div>
      </div>
    );
  }

  // Redirect to login if user is not authenticated
  if (!user || !token) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  }

  // Render nested routes or children
  return children ? children : <Outlet />;
};

export default ProtectedRoute;