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

const chartCard = "rounded-2xl border border-[#E5ECE5] bg-white p-6 shadow-sm";

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
    <div className="space-y-8">
      {/* Page heading */}
      <section>
        <div className="flex items-center gap-2 text-xs font-semibold text-forest">
          <Activity size={15} />
          DATA ANALYSIS
        </div>

        <h1 className="mt-3 font-heading text-3xl font-extrabold text-ink">
          Forest Analytics
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
          Explore radar backscatter and vegetation observations to understand
          changes in forest conditions across Bago Yoma.
        </p>
      </section>

      {/* Demo notice */}
      <div className="rounded-xl border border-[#F0DDBB] bg-[#FFF8EA] p-4">
        <p className="text-xs font-bold text-[#98713A]">DEMONSTRATION DATA</p>

        <p className="mt-1 text-[11px] leading-5 text-[#98713A]">
          All chart values are fabricated examples for interface testing. They
          are not measurements from NISAR, Sentinel, or Bago Yoma.
        </p>
      </div>

      {/* Loading and error states */}
      {loading && (
        <p className="text-sm text-muted">Loading satellite observations...</p>
      )}

      {error && <p className="text-sm text-red-600">{error}</p>}

      {!loading && !error && observations.length === 0 && (
        <p className="text-sm text-muted">
          No satellite observations are currently available.
        </p>
      )}

      {/* SAR chart */}
      <section className={chartCard}>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-light text-forest">
            <Satellite size={20} />
          </div>

          <div>
            <h2 className="font-heading text-base font-bold text-ink">
              SAR Backscatter Analysis
            </h2>

            <p className="mt-1 text-xs text-muted">
              VV and VH polarization observations
            </p>
          </div>
        </div>

        {sarData.length > 0 ? (
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sarData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#EDF1EC"
                />

                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#829087", fontSize: 11 }}
                />

                <YAxis
                  domain={[-25, -5]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#829087", fontSize: 11 }}
                  label={{
                    value: "Backscatter (dB)",
                    angle: -90,
                    position: "insideLeft",
                    fill: "#829087",
                    fontSize: 11,
                  }}
                />

                <Tooltip />
                <Legend />

                <Line
                  type="monotone"
                  dataKey="vv"
                  name="VV"
                  stroke="#285943"
                  strokeWidth={2.5}
                  dot={{ r: 4 }}
                  connectNulls={false}
                />

                <Line
                  type="monotone"
                  dataKey="vh"
                  name="VH"
                  stroke="#D97865"
                  strokeWidth={2.5}
                  dot={{ r: 4 }}
                  connectNulls={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ) : (
          !loading && (
            <p className="py-12 text-center text-sm text-muted">
              No SAR observations available.
            </p>
          )
        )}

        <p className="mt-4 text-[11px] leading-5 text-muted">
          VV and VH represent different radar polarization channels. Backscatter
          variations can reflect changes in vegetation, moisture, and surface
          conditions. They do not independently confirm deforestation.
        </p>
      </section>

      {/* NDVI chart */}
      <section className={chartCard}>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-light text-forest">
            <Leaf size={20} />
          </div>

          <div>
            <h2 className="font-heading text-base font-bold text-ink">
              Vegetation Health Trend
            </h2>

            <p className="mt-1 text-xs text-muted">NDVI optical observations</p>
          </div>
        </div>

        {ndviData.length > 0 ? (
          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={ndviData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#EDF1EC"
                />

                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#829087", fontSize: 11 }}
                />

                <YAxis
                  domain={[0, 1]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#829087", fontSize: 11 }}
                />

                <Tooltip />
                <Legend />

                <Line
                  type="monotone"
                  dataKey="ndvi"
                  name="NDVI"
                  stroke="#77AE68"
                  strokeWidth={2.5}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ) : (
          !loading && (
            <p className="py-12 text-center text-sm text-muted">
              No NDVI observations available.
            </p>
          )
        )}

        <p className="mt-4 text-[11px] leading-5 text-muted">
          NDVI provides optical vegetation information and can help
          contextualize radar observations. It is not a direct measurement of
          forest area.
        </p>
      </section>
    </div>
  );
};

export default Analytics;
