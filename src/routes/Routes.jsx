import { Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "@/routes/ProtectedRoute";
import RoleRoute from "@/routes/RoleRoute";

import DashboardLayout from "@/components/layouts/DashboardLayout";

import DealerOnboardingPage from "@/pages/dealer-onboarding/DealerOnboardingPage";
import NotAllowed from "@/pages/NotAllowed";
import Login from "@/pages/Login";
import DealerDashboard from "@/components/layouts/DealerDashboard";
import DealerList from "@/pages/DealerList";
import Credit from "@/pages/Credit";
import RegisterRm from "@/pages/UserRegister";
import Operation from "@/pages/Operation";
import Accounts from "@/pages/Accounts";
import Department from "@/pages/Department";
import CustomerOnboardingPage from "@/pages/customer_onboarding/CustomerOnboardingPage";
import CustomerList from "@/pages/customer_onboarding/CustomerList";
import UserRegister from "@/pages/UserRegister";
import Settings from "@/pages/Settings";

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
          <Route element={<RoleRoute allowedRoles={["DEALER", "ADMIN"]} />}>
            <Route path="/onboarding" element={<DealerOnboardingPage />} />
          </Route>

          <Route element={<RoleRoute allowedRoles={["DEALER", "ADMIN"]} />}>
            <Route path="/dealerlist" element={<DealerList />} />
          </Route>

          <Route element={<RoleRoute allowedRoles={["DEALER", "ADMIN"]} />}>
            <Route path="/customers/onboarding" element={<CustomerOnboardingPage />} />
          </Route>

          <Route element={<RoleRoute allowedRoles={["DEALER", "ADMIN"]} />}>
            <Route path="/customers" element={<CustomerList />} />
          </Route>

          <Route element={<RoleRoute allowedRoles={["DEALER", "ADMIN"]} />}>
            <Route path="/credit" element={<Credit />} />
          </Route>

          <Route element={<RoleRoute allowedRoles={["DEALER", "ADMIN"]} />}>
            <Route path="/operation" element={<Operation />} />
          </Route>

          <Route element={<RoleRoute allowedRoles={["DEALER", "ADMIN"]} />}>
            <Route path="/accounts" element={<Accounts />} />
          </Route>

          <Route element={<RoleRoute allowedRoles={["DEALER", "ADMIN"]} />}>
            <Route path="/department/roles" element={<Department />} />
          </Route>

          <Route element={<RoleRoute allowedRoles={["DEALER", "ADMIN"]} />}>
            <Route path="/user/register" element={<UserRegister/>} />
          </Route>

          <Route element={<RoleRoute allowedRoles={["DEALER", "ADMIN"]} />}>
            <Route path="/settings" element={<Settings/>} />
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
