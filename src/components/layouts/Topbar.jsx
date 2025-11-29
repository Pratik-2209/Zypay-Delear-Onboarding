import { Button } from "@/components/ui/button"

function Topbar() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
      {/* Left: title + subtitle */}
      <div className="flex items-center gap-3">
        <div className="hidden sm:block">
          <h1 className="text-lg font-semibold text-slate-800">
            Dealer Dashboard
          </h1>
          <p className="text-xs text-slate-500">
            Manage dealer onboarding, credit and EMI customers
          </p>
        </div>
      </div>

      {/* Right: user info + actions */}
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-end leading-tight">
          <span className="text-sm font-medium text-slate-800">
            Dealer Admin
          </span>
          <span className="text-[11px] text-slate-500">
            admin@zypay.in
          </span>
        </div>

        {/* Avatar placeholder */}
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-600 to-green-500 flex items-center justify-center text-xs font-semibold text-white">
          DA
        </div>

        <Button
          variant="outline"
          className="border-red-300 text-red-600 hover:bg-red-50 text-sm"
        >
          Logout
        </Button>
      </div>
    </header>
  )
}

export default Topbar
