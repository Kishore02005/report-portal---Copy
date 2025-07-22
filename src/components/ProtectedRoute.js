// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loader from "./Loader";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, role, loading } = useAuth();

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (!allowedRoles.includes(role)) {
    // Redirect to the user's specific dashboard if they try to access a wrong route
    const dashboardPath =
      role === "admin"
        ? "/admin"
        : role === "superadmin"
        ? "/superadmin"
        : "/dashboard";
    return <Navigate to={dashboardPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
