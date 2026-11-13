import { useEffect, useState } from "react";
import {
  CalendarDays,
  ArrowLeftRight,
  Satellite,
  Info,
  Activity,
} from "lucide-react";

import { forestAPI } from "../../services/api";
import type { SatelliteObservation } from "../../types/forest";

const SatelliteComparison = () => {
  const [observations, setObservations] = useState<SatelliteObservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [beforeIndex, setBeforeIndex] = useState("");
  const [afterIndex, setAfterIndex] = useState("");

  useEffect(() => {
    const loadObservations = async () => {
      try {
        const data = await forestAPI.getObservations();

        const sortedData = [...data].sort((a, b) =>
          a.date.localeCompare(b.date),
        );

        setObservations(sortedData);

        if (sortedData.length >= 2) {
          setBeforeIndex("0");
          setAfterIndex(String(sortedData.length - 1));
        } else if (sortedData.length === 1) {
          setBeforeIndex("0");
          setAfterIndex("0");
        }
      } catch (err) {
        console.error("Failed to load satellite observations:", err);
        setError("Unable to load satellite observations.");
      } finally {
        setLoading(false);
      }
    };

    loadObservations();
  }, []);

  const beforeObservation =
    beforeIndex !== "" ? observations[Number(beforeIndex)] : undefined;

  const afterObservation =
    afterIndex !== "" ? observations[Number(afterIndex)] : undefined;

  const formatDate = (date: string) =>
    new Date(`${date}T00:00:00`).toLocaleDateString("en", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  const renderObservationDetails = (
    observation: SatelliteObservation | undefined,
  ) => {
    if (!observation) {
      return (
        <p className="mt-3 text-xs text-slate-500">No observation selected.</p>
      );
    }

    return (
      <div className="mt-3 grid grid-cols-1 gap-2 rounded-xl border border-slate-800 bg-[#0B1220] p-4">
        <div className="mb-1 flex items-center gap-2">
          <Satellite size={14} className="text-emerald-400" />
          <span className="text-xs font-bold text-emerald-400">
            {observation.satellite}
          </span>
        </div>

        {observation.vv !== undefined && (
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500">VV Backscatter</span>
            <span className="font-semibold text-slate-200">
              {observation.vv} dB
            </span>
          </div>
        )}

        {observation.vh !== undefined && (
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500">VH Backscatter</span>
            <span className="font-semibold text-slate-200">
              {observation.vh} dB
            </span>
          </div>
        )}

        {observation.ndvi !== undefined && (
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500">NDVI</span>
            <span className="font-semibold text-slate-200">
              {observation.ndvi.toFixed(2)}
            </span>
          </div>
        )}

        {observation.vv === undefined &&
          observation.vh === undefined &&
          observation.ndvi === undefined && (
            <p className="text-xs text-slate-500">
              No measurement values available.
            </p>
          )}
      </div>
    );
  };

  const renderDateSelector = (
    value: string,
    onChange: (value: string) => void,
  ) => (
    <label className="flex items-center gap-2 rounded-xl border border-slate-700/80 bg-[#0B1220] px-3 py-3 transition-colors focus-within:border-emerald-500/60">
      <CalendarDays size={15} className="shrink-0 text-emerald-400" />

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full min-w-0 bg-transparent text-xs font-medium text-slate-200 outline-none scheme-dark"
      >
        {observations.map((observation, index) => (
          <option
            key={`${observation.date}-${observation.satellite}-${index}`}
            value={String(index)}
            className="bg-[#111827] text-slate-200"
          >
            {formatDate(observation.date)} — {observation.satellite}
          </option>
        ))}
      </select>
    </label>
  );

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-800 bg-[#111827]">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 px-6 py-5">
        <div>
          <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[1.8px] text-emerald-400">
            <Satellite size={14} />
            Satellite Observation
          </div>

          <h2 className="font-heading text-lg font-bold text-slate-100">
            Before & After Comparison
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Compare satellite measurements across different observation dates
          </p>
        </div>

        <span className="flex items-center gap-2 rounded-lg border border-amber-500/20 bg-amber-500/10 px-3 py-2 text-[10px] font-bold tracking-wide text-amber-400">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          DEMO PREVIEW
        </span>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        {loading ? (
          <div className="flex h-80 items-center justify-center">
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-600 border-t-emerald-400" />
              Loading satellite observations...
            </div>
          </div>
        ) : error ? (
          <div className="flex h-80 flex-col items-center justify-center gap-3">
            <Info size={24} className="text-rose-400" />
            <p className="text-sm text-rose-400">{error}</p>
          </div>
        ) : observations.length === 0 ? (
          <div className="flex h-80 flex-col items-center justify-center gap-3">
            <Satellite size={26} className="text-slate-500" />
            <p className="text-sm font-medium text-slate-400">
              No satellite observations available
            </p>
            <p className="text-xs text-slate-600">
              Processed observations will appear here.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
              {/* Before Observation */}
              <div className="min-w-0">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-sky-400" />
                    <h3 className="text-sm font-bold text-slate-100">Before</h3>
                  </div>

                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    Earlier Observation
                  </span>
                </div>

                <div className="group relative h-57.5 overflow-hidden rounded-xl border border-slate-700/80 bg-slate-800">
                  <img
                    src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=900"
                    alt="Illustrative dense forest landscape"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                  <span className="absolute bottom-3 left-3 rounded-lg border border-white/10 bg-[#111827]/85 px-3 py-1.5 text-[10px] font-bold tracking-wider text-white backdrop-blur-sm">
                    BEFORE
                  </span>
                </div>

                <div className="mt-3">
                  {renderDateSelector(beforeIndex, setBeforeIndex)}
                </div>

                {renderObservationDetails(beforeObservation)}
              </div>

              {/* After Observation */}
              <div className="min-w-0">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <h3 className="text-sm font-bold text-slate-100">After</h3>
                  </div>

                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    Later Observation
                  </span>
                </div>

                <div className="group relative h-57.5 overflow-hidden rounded-xl border border-slate-700/80 bg-slate-800">
                  <img
                    src="https://images.unsplash.com/photo-1511497584788-876760111969?w=900"
                    alt="Illustrative forest landscape"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                  <span className="absolute bottom-3 left-3 rounded-lg border border-white/10 bg-[#111827]/85 px-3 py-1.5 text-[10px] font-bold tracking-wider text-white backdrop-blur-sm">
                    AFTER
                  </span>
                </div>

                <div className="mt-3">
                  {renderDateSelector(afterIndex, setAfterIndex)}
                </div>

                {renderObservationDetails(afterObservation)}
              </div>
            </div>

            {/* Comparison Note */}
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-slate-800 bg-[#0B1220] p-4">
              <ArrowLeftRight
                size={17}
                className="mt-0.5 shrink-0 text-emerald-400"
              />

              <div>
                <p className="text-xs font-semibold text-slate-300">
                  Observation Comparison
                </p>

                <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                  Select two observations to inspect their available
                  measurements. The photographs above are illustrative
                  references, not actual georeferenced satellite imagery of
                  Central Bago Yoma.
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 border-t border-slate-800 bg-[#0B1220]/50 px-6 py-3">
        <Activity size={13} className="shrink-0 text-slate-500" />
        <p className="text-[10px] leading-relaxed text-slate-500">
          Measurement values depend on the available processed observation data
          and its metadata.
        </p>
      </div>
    </section>
  );
};

export default SatelliteComparison;
