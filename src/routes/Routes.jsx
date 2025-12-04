import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import DashboardLayout from "@/components/layouts/DashboardLayout";

// Pages
import Login from "@/pages/Login";
import DealerOnboardingPage from "@/pages/dealer-onboarding/DealerOnboardingPage";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/login" element={<Login />} />

      {/* Protected */}
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/onboarding" element={<DealerOnboardingPage />} />
          <Route path="/dealers" element={<div>Dealers List</div>} />
          <Route path="/emi" element={<div>EMI / Credit</div>} />
          <Route path="/support" element={<div>Support Page</div>} />
          <Route path="/settings" element={<div>Settings Page</div>} />
        </Route>
      </Route>
    </Routes>
  );
}
