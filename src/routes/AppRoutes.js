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
import CourseDetailPage from "../pages/CourseDetailPage";
import LabDetailPage from "../pages/LabDetailPage";
import ReportsPage from "../pages/ReportsPage";

// New placeholder pages for user-specific courses/labs
import UserCoursesPage from "../pages/UserCoursesPage";
import UserHiLabsPage from "../pages/UserHiLabsPage";

import ProtectedRoute from "../components/ProtectedRoute";
import UnauthorizedAccess from "../components/UnauthorizedAccess";
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
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/test-admin-access" element={<ProtectedRoute allowedRoles={["admin"]}><UserDashboard /></ProtectedRoute>} />
      <Route path="/achievement" element={<ProtectedRoute allowedRoles={["user", "superadmin"]}><AchievementPage /></ProtectedRoute>} />
      <Route path="/courses-user" element={<ProtectedRoute allowedRoles={["user", "superadmin"]}><UserCoursesPage /></ProtectedRoute>} />
      <Route path="/hilabs-user" element={<ProtectedRoute allowedRoles={["user", "superadmin"]}><UserHiLabsPage /></ProtectedRoute>} />

      {/* Admin Routes */}
      <Route path="/admin/:organizationId" element={<ProtectedRoute allowedRoles={["admin", "superadmin"]}><AdminDashboard /></ProtectedRoute>} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/participants" element={<ProtectedRoute allowedRoles={["admin", "superadmin"]}><ParticipantsPage /></ProtectedRoute>} />
      <Route path="/participants/:participantId" element={<ProtectedRoute allowedRoles={["admin", "superadmin"]}><ParticipantDetails /></ProtectedRoute>} />
      <Route path="/achievements/:userEmail" element={<ProtectedRoute allowedRoles={["admin", "superadmin"]}><AchievementPage /></ProtectedRoute>} />

      {/* Super Admin Routes */}
      <Route path="/superadmin" element={<SuperAdminDashboard />} />
      <Route path="/organizations" element={<ProtectedRoute allowedRoles={["superadmin"]}><OrganizationsPage /></ProtectedRoute>} />
      <Route path="/organizations/:category" element={<ProtectedRoute allowedRoles={["superadmin"]}><OrganizationCategoryPage /></ProtectedRoute>} />
      <Route path="/labs" element={<ProtectedRoute allowedRoles={["superadmin"]}><LabsPage /></ProtectedRoute>} />
      <Route path="/labs/:labId" element={<ProtectedRoute allowedRoles={["superadmin"]}><LabDetailPage /></ProtectedRoute>} />
      <Route path="/courses" element={<ProtectedRoute allowedRoles={["superadmin"]}><CoursesPage /></ProtectedRoute>} />
      <Route path="/courses/:courseId" element={<ProtectedRoute allowedRoles={["superadmin"]}><CourseDetailPage /></ProtectedRoute>} />
      <Route path="/reports" element={<ProtectedRoute allowedRoles={["superadmin"]}><ReportsPage /></ProtectedRoute>} />

      {/* Test route for unauthorized access */}
      <Route path="/test-unauthorized" element={<UnauthorizedAccess />} />
      
      {/* Catch-all for 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
