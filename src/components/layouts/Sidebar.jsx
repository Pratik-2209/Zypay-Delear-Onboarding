import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const menuItems = [
  { id: "dashboard", label: "Dashboard" },
  { id: "onboarding", label: "Dealer Onboarding" },
  { id: "dealers", label: "Dealers List" },
  { id: "emi", label: "EMI / Credit" },
  { id: "support", label: "Support" },
  { id: "settings", label: "Settings / Profile" },
]

function Sidebar() {
  const [active, setActive] = useState("onboarding")

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
      {/* Logo area */}
      <div className="h-16 flex items-center px-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          {/* Logo from public folder: /zypay-logo.png */}
          <img
            src="/logo.jpeg"
            alt="ZyPay"
            className="h-8 w-auto"
          />
          <span className="text-xl font-bold">
            <span className="text-blue-700">Zy</span>
            <span className="text-green-600">Pay</span>
          </span>
        </div>
      </div>

      {/* Menu items */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {menuItems.map((item) => (
          <Button
            key={item.id}
            type="button"
            variant="ghost"
            onClick={() => setActive(item.id)}
            className={cn(
              "w-full justify-start rounded-lg text-sm font-medium",
              "text-slate-700 hover:bg-blue-50 hover:text-blue-700",
              active === item.id &&
                "bg-blue-50 text-blue-700 border border-blue-100"
            )}
          >
            {item.label}
          </Button>
        ))}
      </nav>

      {/* Bottom area: logout + copyright */}
      <div className="border-t border-slate-200 px-4 py-3 space-y-2">
        <Button
          type="button"
          variant="outline"
          className="w-full justify-center border-red-300 text-red-600 hover:bg-red-50"
        >
          Logout
        </Button>
        <p className="text-[11px] text-slate-400 text-center">
          © {new Date().getFullYear()} ZyPay
        </p>
      </div>
    </aside>
  )
}

export default Sidebar
