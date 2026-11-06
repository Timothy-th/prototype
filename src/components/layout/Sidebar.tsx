import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Map,
  ScanSearch,
  ChartNoAxesCombined,
  Database,
  Trees,
  Leaf,
} from "lucide-react";

const navigation = [
  {
    label: "Overview",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Monitoring Map",
    path: "/map",
    icon: Map,
  },
  {
    label: "Change Detection",
    path: "/detection",
    icon: ScanSearch,
  },
  {
    label: "Analytics",
    path: "/analytics",
    icon: ChartNoAxesCombined,
  },
  {
    label: "Data Sources",
    path: "/sources",
    icon: Database,
  },
];

const Sidebar = () => {
  return (
    <aside className="flex h-screen w-[250px] shrink-0 flex-col border-r border-[#E5ECE5] bg-white px-5 py-6">
      {/* Logo */}
      <div className="mb-10 flex items-center gap-3 px-2">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest text-white">
          <Trees size={25} strokeWidth={1.8} />
        </div>

        <div>
          <h1 className="font-heading text-lg font-extrabold tracking-tight text-forest">
            Bago Yoma
          </h1>
          <p className="text-[10px] font-semibold uppercase tracking-[2px] text-muted">
            Forest Watch
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[1.8px] text-muted">
        Workspace
      </div>

      <nav className="flex flex-1 flex-col gap-1">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `group flex items-center gap-3 rounded-xl px-3 py-3 text-[13px] font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-sage-light text-forest"
                    : "text-[#77847A] hover:bg-[#F5F8F4] hover:text-forest"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon size={19} strokeWidth={isActive ? 2.3 : 1.8} />
                  <span>{item.label}</span>

                  {isActive && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-forest" />
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Sidebar footer */}
      <div className="rounded-2xl bg-[#F3F7F0] p-4">
        <div className="mb-2 flex items-center gap-2 text-forest">
          <Leaf size={17} />
          <span className="text-xs font-bold">Protect Our Forests</span>
        </div>

        <p className="text-[11px] leading-relaxed text-[#829087]">
          Understanding forest changes through satellite observations.
        </p>

        <div className="mt-3 flex items-center gap-1 text-[10px] font-semibold text-forest">
          <span className="h-1.5 w-1.5 rounded-full bg-[#77AE68]" />
          Earth Observation Project
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2 text-[10px] text-[#A0AAA2]">
        <span>NASA Space Apps Challenge 2026</span>
      </div>
    </aside>
  );
};

export default Sidebar;
