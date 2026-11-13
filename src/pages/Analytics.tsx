import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { Activity, Satellite, Leaf } from "lucide-react";
import { useEffect, useState } from "react";

import { forestAPI } from "../services/api";
import type { SatelliteObservation } from "../types/forest";

const chartCard =
  "rounded-2xl border border-[#334155] bg-[#111827] p-6 shadow-lg shadow-black/10";

const chartAxis = {
  fill: "#94A3B8",
  fontSize: 11,
};

const tooltipStyle = {
  backgroundColor: "#111827",
  border: "1px solid #334155",
  borderRadius: "12px",
  color: "#F1F5F9",
  fontSize: "12px",
};

const Analytics = () => {
  const [observations, setObservations] = useState<SatelliteObservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadObservations = async () => {
      try {
        const data = await forestAPI.getObservations();
        setObservations(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load satellite observations.");
      } finally {
        setLoading(false);
      }
    };

    loadObservations();
  }, []);

  // Extract radar observations
  const sarData = observations
    .filter(
      (observation) =>
        observation.vv !== undefined || observation.vh !== undefined,
    )
    .map((observation) => ({
      date: observation.date,
      vv: observation.vv,
      vh: observation.vh,
    }));

  // Extract optical vegetation observations
  const ndviData = observations
    .filter((observation) => observation.ndvi !== undefined)
    .map((observation) => ({
      date: observation.date,
      ndvi: observation.ndvi,
    }));

  return (
    <div className="space-y-8 text-slate-100">
      {/* Page heading */}
      <section>
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-400">
          <Activity size={15} />
          DATA ANALYSIS
        </div>

        <h1 className="mt-3 font-heading text-3xl font-extrabold text-slate-100">
          Forest Analytics
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
          Explore radar backscatter and vegetation observations to understand
          changes in forest conditions across Bago Yoma.
        </p>
      </section>

      {/* Demo notice */}
      <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">
        <p className="text-xs font-bold tracking-wider text-amber-400">
          DEMONSTRATION DATA
        </p>

        <p className="mt-1 text-[11px] leading-5 text-amber-200/70">
          All chart values are fabricated examples for interface testing. They
          are not measurements from NISAR, Sentinel, or Bago Yoma.
        </p>
      </div>

      {/* Loading and error states */}
      {loading && (
        <p className="text-sm text-slate-400">
          Loading satellite observations...
        </p>
      )}

      {error && (
        <p className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-sm text-rose-400">
          {error}
        </p>
      )}

      {!loading && !error && observations.length === 0 && (
        <p className="rounded-xl border border-slate-700 bg-[#111827] p-6 text-center text-sm text-slate-400">
          No satellite observations are currently available.
        </p>
      )}

      {/* SAR chart */}
      <section className={chartCard}>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
            <Satellite size={20} />
          </div>

          <div>
            <h2 className="font-heading text-base font-bold text-slate-100">
              SAR Backscatter Analysis
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              VV and VH polarization observations
            </p>
          </div>
        </div>

        {sarData.length > 0 ? (
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={sarData}
                margin={{ top: 5, right: 15, left: 5, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#334155"
                />

                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={chartAxis}
                />

                <YAxis
                  domain={[-25, -5]}
                  axisLine={false}
                  tickLine={false}
                  tick={chartAxis}
                  label={{
                    value: "Backscatter (dB)",
                    angle: -90,
                    position: "insideLeft",
                    fill: "#94A3B8",
                    fontSize: 11,
                  }}
                />

                <Tooltip
                  contentStyle={tooltipStyle}
                  labelStyle={{ color: "#F1F5F9" }}
                  itemStyle={{ color: "#CBD5E1" }}
                  cursor={{ stroke: "#64748B", strokeDasharray: "4 4" }}
                />

                <Legend
                  wrapperStyle={{
                    color: "#CBD5E1",
                    fontSize: "12px",
                    paddingTop: "12px",
                  }}
                />

                <Line
                  type="monotone"
                  dataKey="vv"
                  name="VV"
                  stroke="#34D399"
                  strokeWidth={2.5}
                  dot={{ r: 4, fill: "#34D399", strokeWidth: 0 }}
                  activeDot={{ r: 6, stroke: "#111827", strokeWidth: 2 }}
                  connectNulls={false}
                />

                <Line
                  type="monotone"
                  dataKey="vh"
                  name="VH"
                  stroke="#F97373"
                  strokeWidth={2.5}
                  dot={{ r: 4, fill: "#F97373", strokeWidth: 0 }}
                  activeDot={{ r: 6, stroke: "#111827", strokeWidth: 2 }}
                  connectNulls={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ) : (
          !loading && (
            <p className="py-12 text-center text-sm text-slate-500">
              No SAR observations available.
            </p>
          )
        )}

        <p className="mt-4 border-t border-slate-700/70 pt-4 text-[11px] leading-5 text-slate-500">
          VV and VH represent different radar polarization channels. Backscatter
          variations can reflect changes in vegetation, moisture, and surface
          conditions. They do not independently confirm deforestation.
        </p>
      </section>

      {/* NDVI chart */}
      <section className={chartCard}>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
            <Leaf size={20} />
          </div>

          <div>
            <h2 className="font-heading text-base font-bold text-slate-100">
              Vegetation Health Trend
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              NDVI optical observations
            </p>
          </div>
        </div>

        {ndviData.length > 0 ? (
          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={ndviData}
                margin={{ top: 5, right: 15, left: 5, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#334155"
                />

                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={chartAxis}
                />

                <YAxis
                  domain={[0, 1]}
                  axisLine={false}
                  tickLine={false}
                  tick={chartAxis}
                />

                <Tooltip
                  contentStyle={tooltipStyle}
                  labelStyle={{ color: "#F1F5F9" }}
                  itemStyle={{ color: "#CBD5E1" }}
                  cursor={{ stroke: "#64748B", strokeDasharray: "4 4" }}
                />

                <Legend
                  wrapperStyle={{
                    color: "#CBD5E1",
                    fontSize: "12px",
                    paddingTop: "12px",
                  }}
                />

                <Line
                  type="monotone"
                  dataKey="ndvi"
                  name="NDVI"
                  stroke="#4ADE80"
                  strokeWidth={2.5}
                  dot={{ r: 4, fill: "#4ADE80", strokeWidth: 0 }}
                  activeDot={{ r: 6, stroke: "#111827", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ) : (
          !loading && (
            <p className="py-12 text-center text-sm text-slate-500">
              No NDVI observations available.
            </p>
          )
        )}

        <p className="mt-4 border-t border-slate-700/70 pt-4 text-[11px] leading-5 text-slate-500">
          NDVI provides optical vegetation information and can help
          contextualize radar observations. It is not a direct measurement of
          forest area.
        </p>
      </section>
    </div>
  );
};

export default Analytics;
