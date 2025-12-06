// src/layout/Sidebar.jsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  FilePlus2,
  Users2,
  BadgeIndianRupee,
  Workflow,
  Wallet2,
  ShieldCheck,
  UserPlus2,
  Settings,
  ChevronRight,
  ChevronDown,
  Users,
  UserPlus,
  Shapes,     // 👈 for Customer Onboarding
} from "lucide-react";

const sections = [
  {
    id: "core",
    label: "Core",
    items: [
      {
        id: "dashboard",
        label: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        id: "onboarding",
        label: "Dealer Onboarding",
        path: "/onboarding",
        icon: FilePlus2,
      },
      {
        id: "dealers",
        label: "Dealers List",
        path: "/dealerlist",
        icon: Users2,
        matchPrefix: "/dealer",
      },
    ],
  },

  // ⭐ NEW SECTION: Customers & Loans
  {
    id: "customersLoans",
    label: "Customers & Loans",
    items: [
      {
        id: "customerOnboarding",
        label: "Customer Onboarding",
        path: "/customers/onboarding",   // 👈 your route for customer onboarding
        icon: UserPlus,
        matchPrefix: "/customers/onboarding",
      },
      {
        id: "customerList",
        label: "Customer List",
        path: "/customers",              // list of all customers
        icon: Users,
      },
    ],
  },

  {
    id: "creditOps",
    label: "Credit & Operations",
    items: [
      {
        id: "creditCheck",
        label: "Credit",
        path: "/credit",
        icon: ShieldCheck,
      },
      {
        id: "operation",
        label: "Operation",
        path: "/operation",
        icon: Workflow,
      },
      {
        id: "accounts",
        label: "Accounts",
        path: "/accounts",
        icon: Wallet2,
      },
    ],
  },
  {
    id: "admin",
    label: "Admin",
    items: [
      {
        id: "department",
        label: "Departments / Roles",
        path: "/department/roles",
        icon: ShieldCheck,
        matchPrefix: "/department",
        children: [
          {
            id: "registerRm",
            label: "Users / RMs",
            path: "/user/register",
            icon: UserPlus2,
          },
        ],
      },
    ],
  },
  {
    id: "system",
    label: "System",
    items: [
      {
        id: "setting",
        label: "Settings",
        path: "/settings",
        icon: Settings,
      },
    ],
  },
];

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const activePath = location.pathname;

  // only one dropdown open at a time
  const [openMenuId, setOpenMenuId] = useState(null);

  const toggleMenu = (id) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };

  const handleLogout = () => {
    localStorage.removeItem("dealer_portal_auth");
    navigate("/login");
  };

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <img src="/logo.jpeg" alt="ZyPay" className="h-8 w-auto rounded-sm" />
          <span className="text-xl font-bold tracking-tight">
            <span className="text-blue-700">Zy</span>
            <span className="text-green-600">Pay</span>
          </span>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-2 py-4 space-y-4 overflow-y-auto">
        {sections.map((section) => (
          <div key={section.id} className="space-y-1">
            <p className="px-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              {section.label}
            </p>

            {section.items.map((item) => {
              const Icon = item.icon;
              const isParentActive =
                activePath === item.path ||
                (item.matchPrefix && activePath.startsWith(item.matchPrefix));

              const isOpen = openMenuId === item.id;

              // No children → normal button
              if (!item.children) {
                return (
                  <Button
                    key={item.id}
                    type="button"
                    variant="ghost"
                    onClick={() => {
                      setOpenMenuId(null); // close dropdowns
                      navigate(item.path);
                    }}
                    className={cn(
                      "w-full justify-start rounded-lg text-sm font-medium",
                      "text-slate-700 hover:bg-blue-50 hover:text-blue-700",
                      "gap-2 px-2",
                      isParentActive &&
                        "bg-blue-50 text-blue-700 border border-blue-100 shadow-[0_0_0_1px_rgba(59,130,246,0.15)]"
                    )}
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    <span>{item.label}</span>
                  </Button>
                );
              }

              // With children → dropdown (Departments / Roles)
              return (
                <div key={item.id} className="space-y-1">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => {
                      toggleMenu(item.id);
                      navigate(item.path);
                    }}
                    className={cn(
                      "w-full justify-between rounded-lg text-sm font-medium",
                      "text-slate-700 hover:bg-blue-50 hover:text-blue-700",
                      "px-2",
                      isParentActive &&
                        "bg-blue-50 text-blue-700 border border-blue-100 shadow-[0_0_0_1px_rgba(59,130,246,0.15)]"
                    )}
                  >
                    <span className="flex items-center gap-2">
                      {Icon && <Icon className="h-4 w-4" />}
                      {item.label}
                    </span>
                    {isOpen ? (
                      <ChevronDown className="h-3.5 w-3.5" />
                    ) : (
                      <ChevronRight className="h-3.5 w-3.5" />
                    )}
                  </Button>

                  {isOpen && (
                    <div className="ml-6 space-y-1">
                      {item.children.map((child) => {
                        const ChildIcon = child.icon;
                        const isChildActive =
                          activePath === child.path ||
                          (child.matchPrefix &&
                            activePath.startsWith(child.matchPrefix));

                        return (
                          <Button
                            key={child.id}
                            type="button"
                            variant="ghost"
                            onClick={() => navigate(child.path)}
                            className={cn(
                              "w-full justify-start rounded-lg text-xs font-medium",
                              "text-slate-600 hover:bg-blue-50 hover:text-blue-700",
                              "gap-2 px-2",
                              isChildActive &&
                                "bg-blue-50 text-blue-700 border border-blue-100"
                            )}
                          >
                            {ChildIcon && (
                              <ChildIcon className="h-3.5 w-3.5" />
                            )}
                            <span>{child.label}</span>
                          </Button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Bottom */}
      <div className="border-t border-slate-200 px-4 py-3 space-y-2">
        <Button
          variant="outline"
          className="w-full justify-center border-red-300 text-red-600 hover:bg-red-50 text-sm"
          onClick={handleLogout}
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
