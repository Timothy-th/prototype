import { Link, NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Map,
  ScanSearch,
  Radar,
  Database,
  Trees,
  Leaf,
  ArrowUpRight,
} from "lucide-react";

const navigation = [
  {
    label: "Forest Overview",
    path: "/monitor",
    icon: LayoutDashboard,
  },
  {
    label: "Monitoring Map",
    path: "/map",
    icon: Map,
  },
  {
    label: "Forest Change",
    path: "/detection",
    icon: ScanSearch,
  },
  {
    label: "Forest Health",
    path: "/analytics",
    icon: Radar,
  },
  {
    label: "Data Sources",
    path: "/sources",
    icon: Database,
  },
];

const Sidebar = () => {
  return (
    <aside className="sticky top-0 flex h-screen w-65 shrink-0 flex-col border-r border-slate-700/60 bg-[#111827] px-5 py-6">
      {/* Project Logo */}
      <div className="mb-10 flex items-center gap-3 px-2">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-500/15 text-emerald-400">
          <Trees size={25} strokeWidth={1.8} />
        </div>

        <div>
          <h1 className="font-heading text-lg font-extrabold tracking-tight text-emerald-400">
            Dancing with SARs
          </h1>

          <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[1.8px] text-slate-500">
            Forest Intelligence
          </p>
        </div>
      </div>

      {/* Navigation Heading */}
      <div className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[1.8px] text-slate-500">
        Monitoring Workspace
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-1">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `group flex items-center gap-3 rounded-xl border px-3 py-3 text-[13px] font-semibold transition-all duration-200 ${
                  isActive
                    ? "border-emerald-500/15 bg-emerald-500/10 text-emerald-400 shadow-sm"
                    : "border-transparent text-slate-400 hover:bg-slate-800/80 hover:text-slate-100"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon size={19} strokeWidth={isActive ? 2.3 : 1.8} />

                  <span>{item.label}</span>

                  {isActive && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Project Information */}
      <div className="rounded-2xl border border-slate-700/70 bg-[#0B1220] p-4">
        <div className="mb-3 flex items-center gap-2 text-emerald-400">
          <Leaf size={17} />
          <span className="text-xs font-bold">Protect Our Forests</span>
        </div>

        <p className="text-[11px] leading-relaxed text-slate-400">
          Transforming satellite observations into meaningful information for
          forest conservation.
        </p>

        <div className="mt-4 border-t border-slate-700/70 pt-3">
          <p className="text-[10px] font-semibold leading-relaxed text-slate-500">
            Observation
            <span className="mx-1.5 text-emerald-500">→</span>
            Investigation
            <span className="mx-1.5 text-emerald-500">→</span>
            Action
          </p>
        </div>
      </div>

      {/* Public Website Link */}
      <Link
        to="/"
        className="mt-4 flex items-center justify-between rounded-xl px-3 py-3 text-xs font-semibold text-slate-400 transition hover:bg-slate-800 hover:text-emerald-400"
      >
        <span>Visit Public Website</span>
        <ArrowUpRight size={16} />
      </Link>

      {/* Copyright */}
      <div className="mt-3 text-center text-[10px] text-slate-600">
        NASA Space Apps Challenge 2026
      </div>
    </aside>
  );
};

export default Sidebar;
