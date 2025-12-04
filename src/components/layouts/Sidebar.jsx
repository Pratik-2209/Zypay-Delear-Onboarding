import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  { id: "dashboard", label: "Dashboard", path: "/dashboard" },
  { id: "onboarding", label: "Dealer Onboarding", path: "/onboarding" },
  { id: "dealers", label: "Dealers List", path: "/dealers" },
  { id: "emi", label: "EMI / Credit", path: "/emi" },
  { id: "support", label: "Support", path: "/support" },
  { id: "settings", label: "Settings / Profile", path: "/settings" },
];

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const activePath = location.pathname;

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
      
      {/* Logo */}
      <div className="h-16 flex items-center px-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <img src="/logo.jpeg" alt="ZyPay" className="h-8 w-auto" />
          <span className="text-xl font-bold">
            <span className="text-blue-700">Zy</span>
            <span className="text-green-600">Pay</span>
          </span>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = activePath === item.path;

          return (
            <Button
              key={item.id}
              type="button"
              variant="ghost"
              onClick={() => navigate(item.path)}
              className={cn(
                "w-full justify-start rounded-lg text-sm font-medium",
                "text-slate-700 hover:bg-blue-50 hover:text-blue-700",
                isActive && "bg-blue-50 text-blue-700 border border-blue-100"
              )}
            >
              {item.label}
            </Button>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="border-t border-slate-200 px-4 py-3 space-y-2">
        <Button
          variant="outline"
          className="w-full justify-center border-red-300 text-red-600 hover:bg-red-50"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
        >
          Logout
        </Button>
        <p className="text-[11px] text-slate-400 text-center">
          © {new Date().getFullYear()} ZyPay
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;
