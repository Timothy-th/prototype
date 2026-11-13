import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#0B1220] text-slate-100">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />

        <main className="min-w-0 flex-1 overflow-x-hidden bg-[#0B1220] p-6 xl:p-8">
          <div className="mx-auto w-full max-w-400">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
