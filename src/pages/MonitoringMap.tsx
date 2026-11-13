import { MapPin, Satellite, Layers, Activity, Info } from "lucide-react";

import ForestMap from "../components/dashboard/ForestMap";

const MonitoringMap = () => {
  return (
    <div className="space-y-6 text-slate-100">
      {/* Page heading */}
      <section>
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-400">
          <MapPin size={15} />
          GEOSPATIAL MONITORING
        </div>

        <h1 className="mt-3 font-heading text-3xl font-extrabold text-slate-100">
          Monitoring Map
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
          Explore the monitoring area and visualize potential forest changes
          using satellite observations.
        </p>
      </section>

      {/* Information cards */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Imagery Source */}
        <div className="flex items-center gap-3 rounded-2xl border border-[#334155] bg-[#111827] p-4 shadow-lg shadow-black/10 transition hover:border-slate-600">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
            <Satellite size={20} />
          </div>

          <div>
            <p className="text-[10px] font-semibold tracking-wide text-slate-500">
              IMAGERY SOURCE
            </p>

            <p className="mt-1 text-sm font-bold text-slate-100">
              Esri World Imagery
            </p>
          </div>
        </div>

        {/* Map Overlays */}
        <div className="flex items-center gap-3 rounded-2xl border border-[#334155] bg-[#111827] p-4 shadow-lg shadow-black/10 transition hover:border-slate-600">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
            <Layers size={20} />
          </div>

          <div>
            <p className="text-[10px] font-semibold tracking-wide text-slate-500">
              MAP OVERLAYS
            </p>

            <p className="mt-1 text-sm font-bold text-slate-100">
              3 Illustrative Layers
            </p>
          </div>
        </div>

        {/* Data Connection */}
        <div className="flex items-center gap-3 rounded-2xl border border-[#334155] bg-[#111827] p-4 shadow-lg shadow-black/10 transition hover:border-slate-600">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-400">
            <Activity size={20} />
          </div>

          <div>
            <p className="text-[10px] font-semibold tracking-wide text-slate-500">
              DATA CONNECTION
            </p>

            <p className="mt-1 text-sm font-bold text-slate-100">
              Pending Integration
            </p>
          </div>
        </div>
      </section>

      {/* Main map */}
      <section className="overflow-hidden rounded-2xl">
        <ForestMap />
      </section>

      {/* Map legend */}
      <section className="rounded-2xl border border-[#334155] bg-[#111827] p-5 shadow-lg shadow-black/10">
        <div className="mb-4 flex items-center gap-2">
          <Layers size={18} className="text-emerald-400" />

          <h2 className="font-heading text-sm font-bold text-slate-100">
            Map Legend
          </h2>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-[#4ADE80]" />

            <span className="text-xs text-slate-400">
              Illustrative Forest Cover
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-[#FB7185]" />

            <span className="text-xs text-slate-400">
              Illustrative Potential Loss
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm border-2 border-dashed border-[#38BDF8]" />

            <span className="text-xs text-slate-400">
              Illustrative Observation Boundary
            </span>
          </div>
        </div>
      </section>

      {/* Information notice */}
      <section className="flex items-start gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
        <Info size={19} className="mt-0.5 shrink-0 text-cyan-400" />

        <div>
          <h3 className="text-sm font-bold text-cyan-300">
            Monitoring Area Information
          </h3>

          <p className="mt-2 text-xs leading-6 text-slate-400">
            The current map uses an approximate location preview and
            illustrative overlays. The official Area of Interest (AOI),
            satellite observation footprints, and processed forest-change layers
            will be integrated when verified geospatial data becomes available.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MonitoringMap;
