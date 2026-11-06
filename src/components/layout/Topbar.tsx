import { MapPin, CalendarDays, Bell, ChevronDown } from "lucide-react";

const Topbar = () => {
  return (
    <header className="flex h-[82px] w-full items-center justify-between border-b border-[#E5ECE5] bg-white px-8">
      {/* Left section */}
      <div>
        <div className="mb-1 flex items-center gap-2 text-[11px] text-muted">
          <span>Workspace</span>
          <span>/</span>
          <span className="font-semibold text-forest">Overview</span>
        </div>

        <h2 className="font-heading text-xl font-bold text-ink">
          Forest Overview
        </h2>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-3">
        {/* Location */}
        <button className="flex items-center gap-2 rounded-xl border border-[#E5ECE5] px-3 py-2.5 transition hover:bg-page">
          <MapPin size={16} className="text-forest" />

          <div className="text-left">
            <p className="text-[9px] font-medium text-muted">Monitoring Area</p>
            <p className="text-xs font-bold text-ink">Bago Yoma</p>
          </div>

          <ChevronDown size={14} className="ml-1 text-muted" />
        </button>

        {/* Date range */}
        <button className="flex items-center gap-2 rounded-xl border border-[#E5ECE5] px-3 py-3 transition hover:bg-page">
          <CalendarDays size={16} className="text-muted" />
          <span className="text-xs font-semibold text-ink">Last 12 Months</span>
          <ChevronDown size={14} className="text-muted" />
        </button>

        {/* Notifications */}
        <button
          aria-label="Notifications"
          className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5ECE5] text-muted transition hover:bg-page hover:text-forest"
        >
          <Bell size={18} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-[#E58B62]" />
        </button>

        {/* Profile */}
        <div className="ml-1 flex items-center gap-2 border-l border-[#E5ECE5] pl-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-light text-sm font-bold text-forest">
            BY
          </div>

          <div className="hidden xl:block">
            <p className="text-xs font-bold text-ink">Forest Watch</p>
            <p className="text-[10px] text-muted">Research Dashboard</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
