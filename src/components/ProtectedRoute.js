// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loader from "./Loader";
import UnauthorizedAccess from "./UnauthorizedAccess";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, role, loading } = useAuth();

  // Debug logging
  console.log('ProtectedRoute Debug:', {
    user: user?.email,
    role,
    loading,
    allowedRoles,
    hasAccess: role === "superadmin" || allowedRoles.includes(role)
  });

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Super admin has access to all routes
  if (role !== "superadmin" && !allowedRoles.includes(role)) {
    console.log('Access denied - Role check failed:', { role, allowedRoles });
    return <UnauthorizedAccess />;
  }

  return children;
};

export default ProtectedRoute;
