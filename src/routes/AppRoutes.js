// src/routes/AppRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import UserDashboard from "../pages/UserDashboard";
import AdminDashboard from "../pages/AdminDashboard";
import SuperAdminDashboard from "../pages/SuperAdminDashboard";
import AchievementPage from "../pages/AchievementPage";
import ParticipantDetails from "../pages/ParticipantDetails";
import ParticipantsPage from "../pages/ParticipantsPage";
import NotFound from "../pages/NotFound";
import OrganizationsPage from "../pages/OrganizationsPage";
import OrganizationCategoryPage from "../pages/OrganizationCategoryPage";
import LabsPage from "../pages/LabsPage";
import CoursesPage from "../pages/CoursesPage";
import ReportsPage from "../pages/ReportsPage";

// New placeholder pages for user-specific courses/labs
import UserCoursesPage from "../pages/UserCoursesPage";
import UserHiLabsPage from "../pages/UserHiLabsPage";

import ProtectedRoute from "../components/ProtectedRoute";
// Removed DashboardLayout, Navbar, Sidebar imports
// import DashboardLayout from "../layouts/DashboardLayout";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<LoginPage />} />

      {/* User Routes */}
      {/* Each protected route directly renders the page component */}
      <Route path="/dashboard" element={<ProtectedRoute allowedRoles={["user"]}><UserDashboard /></ProtectedRoute>} />
      <Route path="/achievement" element={<ProtectedRoute allowedRoles={["user"]}><AchievementPage /></ProtectedRoute>} />
      <Route path="/courses-user" element={<ProtectedRoute allowedRoles={["user"]}><UserCoursesPage /></ProtectedRoute>} />
      <Route path="/hilabs-user" element={<ProtectedRoute allowedRoles={["user"]}><UserHiLabsPage /></ProtectedRoute>} />

      {/* Admin Routes */}
      <Route path="/admin/:organizationId" element={<ProtectedRoute allowedRoles={["admin", "superadmin"]}><AdminDashboard /></ProtectedRoute>} />
      <Route path="/admin" element={<ProtectedRoute allowedRoles={["admin"]}><AdminDashboard /></ProtectedRoute>} />
      <Route path="/participants" element={<ProtectedRoute allowedRoles={["admin", "superadmin"]}><ParticipantsPage /></ProtectedRoute>} />
      <Route path="/participants/:participantId" element={<ProtectedRoute allowedRoles={["admin", "superadmin"]}><ParticipantDetails /></ProtectedRoute>} />

      {/* Super Admin Routes */}
      <Route path="/superadmin" element={<ProtectedRoute allowedRoles={["superadmin"]}><SuperAdminDashboard /></ProtectedRoute>} />
      <Route path="/organizations" element={<ProtectedRoute allowedRoles={["superadmin"]}><OrganizationsPage /></ProtectedRoute>} />
      <Route path="/organizations/:category" element={<ProtectedRoute allowedRoles={["superadmin"]}><OrganizationCategoryPage /></ProtectedRoute>} />
      <Route path="/labs" element={<ProtectedRoute allowedRoles={["superadmin"]}><LabsPage /></ProtectedRoute>} />
      <Route path="/courses" element={<ProtectedRoute allowedRoles={["superadmin"]}><CoursesPage /></ProtectedRoute>} />
      <Route path="/reports" element={<ProtectedRoute allowedRoles={["superadmin"]}><ReportsPage /></ProtectedRoute>} />

      {/* Catch-all for 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
