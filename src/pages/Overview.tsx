import {
  Trees,
  TrendingDown,
  TrendingUp,
  Leaf,
  Activity,
  ArrowUpRight,
} from "lucide-react";

import { useEffect, useState } from "react";
import ForestChangeChart from "../components/dashboard/ForestChangeChart";
import ForestMap from "../components/dashboard/ForestMap";
import SatelliteComparison from "../components/dashboard/SatelliteComparison";

import { forestAPI } from "../services/api";
import type { ForestSummary } from "../types/forest";

const Overview = () => {
  const [summary, setSummary] = useState<ForestSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSummary = async () => {
      try {
        const data = await forestAPI.getSummary();
        setSummary(data);
      } catch (err) {
        setError("Unable to load forest summary.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadSummary();
  }, []);

  const stats = [
    {
      title: "Forest Coverage",
      value: summary?.forestCoverage ?? "—",
      unit: "km²",
      description: "Total monitored forest area",
      icon: Trees,
      color: "text-emerald-400",
      bg: "border-emerald-500/20 bg-emerald-500/10",
    },
    {
      title: "Forest Loss",
      value: summary?.forestLoss ?? "—",
      unit: "km²",
      description: "Detected forest loss area",
      icon: TrendingDown,
      color: "text-rose-400",
      bg: "border-rose-500/20 bg-rose-500/10",
    },
    {
      title: "Forest Gain",
      value: summary?.forestGain ?? "—",
      unit: "km²",
      description: "Detected forest gain area",
      icon: TrendingUp,
      color: "text-green-400",
      bg: "border-green-500/20 bg-green-500/10",
    },
    {
      title: "Vegetation Health",
      value: summary?.vegetationHealth ?? "—",
      unit: "NDVI",
      description: "Satellite-derived vegetation index",
      icon: Leaf,
      color: "text-sky-400",
      bg: "border-sky-500/20 bg-sky-500/10",
    },
  ];

  return (
    <div className="space-y-8 text-slate-100">
      {/* Welcome Section */}
      <section className="relative overflow-hidden rounded-2xl border border-emerald-500/15 bg-linear-to-br from-[#142b27] via-[#111f25] to-[#111827] p-7 xl:p-9">
        <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-emerald-400/5 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex items-center gap-2 text-[10px] font-bold tracking-[2px] text-emerald-400">
            <Activity size={15} />
            FOREST MONITORING DASHBOARD
          </div>

          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-white xl:text-4xl">
            Understanding Our Forests.
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
            Explore forest conditions and investigate potential environmental
            changes across Central Bago Yoma through satellite observations.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-2">
              <MapPinIcon />
              <span className="text-xs font-semibold text-emerald-300">
                Central Bago Yoma
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-slate-700/70 bg-slate-900/40 px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span className="text-xs font-semibold text-slate-400">
                Demonstration Environment
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Forest Indicators */}
      <section>
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[1.8px] text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Monitoring Summary
            </div>

            <h2 className="font-heading text-lg font-bold text-slate-100">
              Forest Indicators
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Key environmental metrics for the monitoring area
            </p>
          </div>

          <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 text-[10px] font-bold tracking-wide text-amber-400">
            AWAITING VERIFIED DATA
          </span>
        </div>

        {error && (
          <div className="mb-4 rounded-xl border border-rose-500/20 bg-rose-500/10 p-3 text-sm text-rose-400">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="group rounded-2xl border border-slate-800 bg-[#111827] p-5 transition duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-[#151f30]"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-400">
                      {stat.title}
                    </p>

                    <div className="mt-5 flex items-baseline gap-2">
                      <span className="font-heading text-3xl font-extrabold tracking-tight text-white">
                        {loading ? "..." : error ? "—" : stat.value}
                      </span>

                      <span className="text-xs font-medium text-slate-500">
                        {stat.unit}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border ${stat.bg} ${stat.color}`}
                  >
                    <Icon size={21} strokeWidth={1.8} />
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-3">
                  <p className="text-[11px] text-slate-500">
                    {stat.description}
                  </p>

                  <ArrowUpRight
                    size={14}
                    className="text-slate-600 transition group-hover:text-emerald-400"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Forest Change Chart */}
      <section>
        <ForestChangeChart />
      </section>

      {/* Monitoring Map */}
      <section>
        <ForestMap />
      </section>

      {/* Satellite Comparison */}
      <section>
        <SatelliteComparison />
      </section>
    </div>
  );
};

const MapPinIcon = () => (
  <span className="text-emerald-400">
    <Trees size={14} />
  </span>
);

export default Overview;
