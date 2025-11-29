import Sidebar from "@/components/layouts/Sidebar"
import Topbar from "@/components/layouts/Topbar"

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-slate-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 p-4">
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
