import { Trees, TrendingDown, TrendingUp, Leaf } from "lucide-react";
import ForestChangeChart from "../components/dashboard/ForestChangeChart";
import ForestMap from "../components/dashboard/ForestMap";
import SatelliteComparison from "../components/dashboard/SatelliteComparison";
import { useEffect, useState } from "react";
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
      description: "Awaiting verified area data",
      icon: Trees,
    },
    {
      title: "Forest Loss",
      value: summary?.forestLoss ?? "—",
      unit: "km²",
      description: "Awaiting detection results",
      icon: TrendingDown,
    },
    {
      title: "Forest Gain",
      value: summary?.forestGain ?? "—",
      unit: "km²",
      description: "Awaiting detection results",
      icon: TrendingUp,
    },
    {
      title: "Vegetation Health",
      value: summary?.vegetationHealth ?? "—",
      unit: "NDVI",
      description: "Awaiting satellite analysis",
      icon: Leaf,
    },
  ];
  return (
    <div className="space-y-8">
      {/* Welcome section */}
      <section>
        <div className="flex items-center gap-2 text-xs font-semibold text-forest">
          <span className="h-2 w-2 rounded-full bg-[#77AE68]" />
          FOREST MONITORING DASHBOARD
        </div>

        <h1 className="mt-3 font-heading text-3xl font-extrabold text-ink">
          Understanding Our Forests.
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
          Monitor forest conditions and identify potential changes across Bago
          Yoma using satellite observations.
        </p>
      </section>

      {/* Statistics */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-heading text-base font-bold text-ink">
            Forest Indicators
          </h2>
          {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

          <span className="rounded-full bg-[#FFF3DF] px-3 py-1 text-[10px] font-bold text-[#A47735]">
            DEMO DATA PENDING
          </span>
        </div>
        <ForestChangeChart />
        <ForestMap />
        <SatelliteComparison />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="rounded-2xl border border-[#E5ECE5] bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-muted">
                    {stat.title}
                  </p>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-light text-forest">
                    <Icon size={20} />
                  </div>
                </div>

                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-heading text-3xl font-extrabold text-ink">
                    {loading ? "..." : stat.value}{" "}
                  </span>
                  <span className="text-xs text-muted">{stat.unit}</span>
                </div>

                <p className="mt-2 text-[11px] text-muted">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Overview;
