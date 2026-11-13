import { useLocation } from "react-router-dom";
import { MapPin, CalendarDays, Bell, ChevronDown } from "lucide-react";

const pageDetails: Record<string, string> = {
  "/monitor": "Forest Overview",
  "/map": "Monitoring Map",
  "/detection": "Forest Change",
  "/analytics": "Forest Health",
  "/sources": "Data Sources",
};

const Topbar = () => {
  const location = useLocation();

  const pageTitle = pageDetails[location.pathname] ?? "Forest Overview";

  return (
    <header className="sticky top-0 z-30 flex h-20 w-full shrink-0 items-center justify-between border-b border-slate-700/60 bg-[#111827]/95 px-8 backdrop-blur-xl">
      {/* Page Information */}
      <div>
        <div className="mb-1 flex items-center gap-2 text-[11px] text-slate-500">
          <span>Workspace</span>
          <span>/</span>
          <span className="font-semibold text-emerald-400">{pageTitle}</span>
        </div>

        <h2 className="font-heading text-xl font-bold text-slate-100">
          {pageTitle}
        </h2>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Monitoring Area */}
        <button className="flex items-center gap-2 rounded-xl border border-slate-700/80 bg-[#0B1220] px-3 py-2.5 transition hover:border-emerald-500/40 hover:bg-slate-800">
          <MapPin size={16} className="text-emerald-400" />

          <div className="text-left">
            <p className="text-[9px] font-medium text-slate-500">
              Monitoring Area
            </p>

            <p className="text-xs font-bold text-slate-200">Bago Yoma</p>
          </div>

          <ChevronDown size={14} className="ml-1 text-slate-500" />
        </button>

        {/* Date Range */}
        <button className="flex items-center gap-2 rounded-xl border border-slate-700/80 bg-[#0B1220] px-3 py-3 transition hover:border-emerald-500/40 hover:bg-slate-800">
          <CalendarDays size={16} className="text-slate-400" />

          <span className="text-xs font-semibold text-slate-200">
            2020 – 2026
          </span>

          <ChevronDown size={14} className="text-slate-500" />
        </button>

        {/* Notifications */}
        <button
          aria-label="Notifications"
          className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/80 bg-[#0B1220] text-slate-400 transition hover:border-emerald-500/40 hover:bg-slate-800 hover:text-emerald-400"
        >
          <Bell size={18} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-[#0B1220] bg-rose-400" />
        </button>

        {/* Project Profile */}
        <div className="ml-1 flex items-center gap-2 border-l border-slate-700 pl-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-500/15 text-sm font-bold text-emerald-400">
            SAR
          </div>

          <div className="hidden xl:block">
            <p className="text-xs font-bold text-slate-200">
              Dancing with SARs
            </p>

            <p className="text-[10px] text-slate-500">Research Dashboard</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
