import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { TrendingUp, Info } from "lucide-react";

import { forestAPI } from "../../services/api";
import type { ForestChange } from "../../types/forest";

const ForestChangeChart = () => {
  const [data, setData] = useState<ForestChange[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadChanges = async () => {
      try {
        const result = await forestAPI.getChanges();
        setData(result);
      } catch (err) {
        console.error("Failed to load forest changes:", err);
        setError("Unable to load forest change data.");
      } finally {
        setLoading(false);
      }
    };

    loadChanges();
  }, []);

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-800 bg-[#111827]">
      {/* Card Header */}
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-800 px-6 py-5">
        <div>
          <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[1.8px] text-emerald-400">
            <TrendingUp size={14} />
            Forest Change Analysis
          </div>

          <h2 className="font-heading text-lg font-bold text-slate-100">
            Forest Loss & Gain
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Changes in monitored forest area over time
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-lg border border-amber-500/20 bg-amber-500/10 px-3 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          <span className="text-[10px] font-bold tracking-wide text-amber-400">
            DEMO PREVIEW
          </span>
        </div>
      </div>

      {/* Chart Content */}
      <div className="p-5 sm:p-6">
        {loading ? (
          <div className="flex h-80 items-center justify-center">
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-600 border-t-emerald-400" />
              Loading forest change data...
            </div>
          </div>
        ) : error ? (
          <div className="flex h-80 flex-col items-center justify-center gap-3">
            <Info size={24} className="text-rose-400" />
            <p className="text-sm text-rose-400">{error}</p>
          </div>
        ) : data.length === 0 ? (
          <div className="flex h-80 flex-col items-center justify-center gap-2">
            <Info size={24} className="text-slate-500" />
            <p className="text-sm font-medium text-slate-400">
              No forest change data available
            </p>
            <p className="text-xs text-slate-600">
              Processed satellite observations will appear here.
            </p>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart
              data={data}
              margin={{ top: 10, right: 12, left: -15, bottom: 5 }}
            >
              <defs>
                <linearGradient
                  id="forestLossGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#FB7185" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#FB7185" stopOpacity={0} />
                </linearGradient>

                <linearGradient
                  id="forestGainGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#4ADE80" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#4ADE80" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="3 5"
                vertical={false}
                stroke="#263449"
              />

              <XAxis
                dataKey="month"
                tick={{ fill: "#94A3B8", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                tickMargin={12}
              />

              <YAxis
                tick={{ fill: "#94A3B8", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                tickMargin={10}
              />

              <Tooltip
                contentStyle={{
                  backgroundColor: "#0B1220",
                  border: "1px solid #334155",
                  borderRadius: "12px",
                  color: "#F1F5F9",
                  fontSize: "12px",
                  padding: "10px 14px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                }}
                labelStyle={{
                  color: "#F8FAFC",
                  fontWeight: 700,
                  marginBottom: "6px",
                }}
                itemStyle={{
                  padding: "3px 0",
                }}
                cursor={{
                  stroke: "#64748B",
                  strokeDasharray: "4 4",
                }}
              />

              <Legend
                verticalAlign="bottom"
                height={38}
                iconType="circle"
                wrapperStyle={{
                  fontSize: "11px",
                  color: "#CBD5E1",
                  paddingTop: "12px",
                }}
              />

              <Area
                type="monotone"
                dataKey="loss"
                name="Forest Loss"
                stroke="#FB7185"
                strokeWidth={2.5}
                fill="url(#forestLossGradient)"
                activeDot={{
                  r: 5,
                  stroke: "#FB7185",
                  strokeWidth: 2,
                  fill: "#111827",
                }}
              />

              <Area
                type="monotone"
                dataKey="gain"
                name="Forest Gain"
                stroke="#4ADE80"
                strokeWidth={2.5}
                fill="url(#forestGainGradient)"
                activeDot={{
                  r: 5,
                  stroke: "#4ADE80",
                  strokeWidth: 2,
                  fill: "#111827",
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Footer Note */}
      <div className="flex items-start gap-2 border-t border-slate-800 bg-[#0B1220]/50 px-6 py-3">
        <Info size={13} className="mt-0.5 shrink-0 text-slate-500" />
        <p className="text-[10px] leading-relaxed text-slate-500">
          Forest change estimates are illustrative until verified satellite
          processing results are integrated.
        </p>
      </div>
    </section>
  );
};

export default ForestChangeChart;
