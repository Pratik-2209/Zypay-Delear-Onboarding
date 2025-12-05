import { Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "@/routes/ProtectedRoute";
import RoleRoute from "@/routes/RoleRoute";

import DashboardLayout from "@/components/layouts/DashboardLayout";

import DealerOnboardingPage from "@/pages/dealer-onboarding/DealerOnboardingPage";
import NotAllowed from "@/pages/NotAllowed";
import Login from "@/pages/Login";
import DealerDashboard from "@/components/layouts/DealerDashboard";

export default function AppRoutes() {
  return (
    <Routes>
      {/* ---------- Public Routes ---------- */}
      <Route path="/login" element={<Login />} />
      <Route path="/not-allowed" element={<NotAllowed />} />

      {/* ---------- Protected Routes ---------- */}
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>

          {/* DEFAULT DASHBOARD FOR ALL LOGGED USERS */}
          <Route path="/dashboard" element={<DealerDashboard />} />

          {/* Dealer + Admin can access onboarding */}
          <Route element={<RoleRoute allowedRoles={["dealer", "admin"]} />}>
            <Route path="/onboarding" element={<DealerOnboardingPage />} />
          </Route>

          {/* Admin-only pages in future */}
          {/* 
          <Route element={<RoleRoute allowedRoles={["admin"]} />}>
            <Route path="/bureau" element={<BureauPage />} />
          </Route> 
          */}
        </Route>
      </Route>

      {/* ---------- Fallback ---------- */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
