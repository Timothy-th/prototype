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

  if (loading) {
    return (
      <p className="py-10 text-center text-[#829087]">
        Loading forest change data...
      </p>
    );
  }

  if (error) {
    return <p className="py-10 text-center text-red-500">{error}</p>;
  }

  if (data.length === 0) {
    return (
      <p className="py-10 text-center text-[#829087]">
        No forest change data available.
      </p>
    );
  }

  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="lossGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#D97865" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#D97865" stopOpacity={0} />
            </linearGradient>

            <linearGradient id="gainGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#77AE68" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#77AE68" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#E5EBE3"
          />

          <XAxis
            dataKey="month"
            tick={{ fill: "#829087", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{ fill: "#829087", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip />
          <Legend />

          <Area
            type="monotone"
            dataKey="loss"
            name="Forest Loss"
            stroke="#D97865"
            strokeWidth={2}
            fill="url(#lossGradient)"
          />

          <Area
            type="monotone"
            dataKey="gain"
            name="Forest Gain"
            stroke="#77AE68"
            strokeWidth={2}
            fill="url(#gainGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ForestChangeChart;
