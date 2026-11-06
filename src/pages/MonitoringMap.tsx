import { MapPin, Satellite, Layers, Activity, Info } from "lucide-react";

import ForestMap from "../components/dashboard/ForestMap";

const MonitoringMap = () => {
  return (
    <div className="space-y-6">
      {/* Page heading */}
      <section>
        <div className="flex items-center gap-2 text-xs font-semibold text-forest">
          <MapPin size={15} />
          GEOSPATIAL MONITORING
        </div>

        <h1 className="mt-3 font-heading text-3xl font-extrabold text-ink">
          Monitoring Map
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
          Explore the monitoring area and visualize potential forest changes
          using satellite observations.
        </p>
      </section>

      {/* Information cards */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex items-center gap-3 rounded-2xl border border-[#E5ECE5] bg-white p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-light text-forest">
            <Satellite size={20} />
          </div>
          <div>
            <p className="text-[10px] font-semibold text-muted">
              IMAGERY SOURCE
            </p>
            <p className="mt-1 text-sm font-bold text-ink">
              Esri World Imagery
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-[#E5ECE5] bg-white p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-light text-forest">
            <Layers size={20} />
          </div>
          <div>
            <p className="text-[10px] font-semibold text-muted">MAP OVERLAYS</p>
            <p className="mt-1 text-sm font-bold text-ink">
              3 Illustrative Layers
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-[#E5ECE5] bg-white p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-light text-forest">
            <Activity size={20} />
          </div>
          <div>
            <p className="text-[10px] font-semibold text-muted">
              DATA CONNECTION
            </p>
            <p className="mt-1 text-sm font-bold text-ink">
              Pending Integration
            </p>
          </div>
        </div>
      </section>

      {/* Main map */}
      <section>
        <ForestMap />
      </section>

      {/* Map legend */}
      <section className="rounded-2xl border border-[#E5ECE5] bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <Layers size={18} className="text-forest" />
          <h2 className="font-heading text-sm font-bold text-ink">
            Map Legend
          </h2>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-[#77AE68]" />
            <span className="text-xs text-muted">
              Illustrative Forest Cover
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-[#D97865]" />
            <span className="text-xs text-muted">
              Illustrative Potential Loss
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm border-2 border-dashed border-forest" />
            <span className="text-xs text-muted">
              Illustrative Observation Boundary
            </span>
          </div>
        </div>
      </section>

      {/* Information notice */}
      <section className="flex items-start gap-3 rounded-2xl border border-[#E5ECE5] bg-[#F3F7F0] p-5">
        <Info size={19} className="mt-0.5 shrink-0 text-forest" />

        <div>
          <h3 className="text-sm font-bold text-forest">
            Monitoring Area Information
          </h3>

          <p className="mt-2 text-xs leading-6 text-[#64766A]">
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
