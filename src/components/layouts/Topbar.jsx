import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, LogOut } from "lucide-react";

function getInitials(name = "") {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

function Topbar({ onMenuToggle }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // 🔹 Load logged-in user from localStorage
  useEffect(() => {
    const raw = localStorage.getItem("dealer_portal_auth");
    if (!raw) return;

    try {
      const parsed = JSON.parse(raw);
      setUser(parsed.user || null);
    } catch (err) {
      console.error("Error parsing dealer_portal_auth:", err);
    }
  }, []);

  // Fallbacks if user is not loaded yet
  const displayName = user?.name || user?.fullName || user?.username || "Dealer Admin";
  const displayEmail = user?.email || user?.mobile || "admin@zypay.in";
  const displayRole = user?.role || user?.userType || "Admin";

  const handleLogout = () => {
    localStorage.removeItem("dealer_portal_auth");
    // if you also store token separately, remove it too
    // localStorage.removeItem("dealer_token");

    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-30 h-16 bg-white/80 backdrop-blur-sm border-b border-slate-200 flex items-center justify-between px-3 sm:px-6">
      {/* Left: menu (mobile) + title */}
      <div className="flex items-center gap-3">
        {/* Sidebar toggle button for mobile */}
        {onMenuToggle && (
          <button
            type="button"
            onClick={onMenuToggle}
            className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white p-1.5 mr-1 text-slate-600 hover:bg-slate-50 md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        )}

        <div>
          <h1 className="text-base sm:text-lg font-semibold text-slate-800">
            Dealer Dashboard
          </h1>
          <p className="hidden sm:block text-xs text-slate-500">
            Manage dealer onboarding, credit and EMI customers
          </p>
        </div>
      </div>

      {/* Right: user info + actions */}
      <div className="flex items-center gap-3">
        {/* User dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2.5 py-1.5 hover:bg-slate-50 transition">
              <div className="hidden sm:flex flex-col items-end leading-tight mr-1">
                <span className="text-xs font-medium text-slate-800 line-clamp-1 max-w-[140px]">
                  {displayName}
                </span>
                <span className="text-[10px] text-slate-500 line-clamp-1 max-w-[180px]">
                  {displayRole} • {displayEmail}
                </span>
              </div>

              {/* Avatar circle */}
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-600 to-green-500 flex items-center justify-center text-xs font-semibold text-white">
                {getInitials(displayName)}
              </div>
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{displayName}</span>
                <span className="text-xs text-slate-500">{displayEmail}</span>
                <span className="text-[11px] text-slate-400 mt-0.5">
                  Role: {displayRole}
                </span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-red-600 focus:text-red-700"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Extra Logout button for desktop (optional) */}
        <Button
          variant="outline"
          className="hidden sm:inline-flex border-red-300 text-red-600 hover:bg-red-50 text-xs sm:text-sm"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </header>
  );
}

export default Topbar;
