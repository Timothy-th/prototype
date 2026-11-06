import { useEffect, useState } from "react";
import { CalendarDays, ArrowLeftRight } from "lucide-react";

import { forestAPI } from "../../services/api";
import type { SatelliteObservation } from "../../types/forest";

const SatelliteComparison = () => {
  const [observations, setObservations] = useState<SatelliteObservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [beforeDate, setBeforeDate] = useState("");
  const [afterDate, setAfterDate] = useState("");

  useEffect(() => {
    const loadObservations = async () => {
      try {
        const data = await forestAPI.getObservations();

        const sortedData = [...data].sort((a, b) =>
          a.date.localeCompare(b.date),
        );

        setObservations(sortedData);

        if (sortedData.length >= 2) {
          setBeforeDate(sortedData[0].date);
          setAfterDate(sortedData[sortedData.length - 1].date);
        } else if (sortedData.length === 1) {
          setBeforeDate(sortedData[0].date);
          setAfterDate(sortedData[0].date);
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

  const beforeObservation = observations.find(
    (observation) => observation.date === beforeDate,
  );

  const afterObservation = observations.find(
    (observation) => observation.date === afterDate,
  );

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
      return <p className="text-xs text-muted">No observation selected.</p>;
    }

    return (
      <div className="mt-3 space-y-2 rounded-lg bg-[#F3F7F0] p-3">
        <p className="text-xs font-bold text-forest">{observation.satellite}</p>

        {observation.vv !== undefined && (
          <p className="text-xs text-muted">
            VV Backscatter: {observation.vv} dB
          </p>
        )}

        {observation.vh !== undefined && (
          <p className="text-xs text-muted">
            VH Backscatter: {observation.vh} dB
          </p>
        )}

        {observation.ndvi !== undefined && (
          <p className="text-xs text-muted">
            NDVI: {observation.ndvi.toFixed(2)}
          </p>
        )}
      </div>
    );
  };

  return (
    <section className="rounded-2xl border border-[#E5ECE5] bg-white p-6 shadow-sm">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="font-heading text-base font-bold text-ink">
            Satellite Comparison
          </h2>
          <p className="mt-1 text-xs text-muted">
            Compare observations across two dates
          </p>
        </div>

        <span className="rounded-full bg-[#FFF3DF] px-3 py-1 text-[10px] font-bold text-[#A47735]">
          DEMO PREVIEW
        </span>
      </div>

      {loading ? (
        <p className="py-10 text-center text-sm text-muted">
          Loading satellite observations...
        </p>
      ) : error ? (
        <p className="py-10 text-center text-sm text-red-500">{error}</p>
      ) : observations.length === 0 ? (
        <p className="py-10 text-center text-sm text-muted">
          No satellite observations available.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Before */}
            <div>
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-bold text-ink">Before</span>
                <span className="text-[10px] text-muted">
                  Earlier observation
                </span>
              </div>

              <div className="relative h-57.5 overflow-hidden rounded-xl bg-sage-light">
                <img
                  src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=900"
                  alt="Illustrative dense forest landscape"
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-3 left-3 rounded-lg bg-black/60 px-3 py-1.5 text-[11px] font-semibold text-white">
                  Before
                </span>
              </div>

              <label className="mt-3 flex items-center gap-2 rounded-lg border border-[#E5ECE5] px-3 py-2">
                <CalendarDays size={15} className="text-muted" />
                <select
                  value={beforeDate}
                  onChange={(e) => setBeforeDate(e.target.value)}
                  className="w-full bg-transparent text-xs text-ink outline-none"
                >
                  {observations.map((observation, index) => (
                    <option
                      key={`${observation.date}-${observation.satellite}-${index}`}
                      value={observation.date}
                    >
                      {formatDate(observation.date)} — {observation.satellite}
                    </option>
                  ))}
                </select>
              </label>

              {renderObservationDetails(beforeObservation)}
            </div>

            {/* After */}
            <div>
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-bold text-ink">After</span>
                <span className="text-[10px] text-muted">
                  Later observation
                </span>
              </div>

              <div className="relative h-57.5 overflow-hidden rounded-xl bg-sage-light">
                <img
                  src="https://images.unsplash.com/photo-1511497584788-876760111969?w=900"
                  alt="Illustrative forest landscape"
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-3 left-3 rounded-lg bg-black/60 px-3 py-1.5 text-[11px] font-semibold text-white">
                  After
                </span>
              </div>

              <label className="mt-3 flex items-center gap-2 rounded-lg border border-[#E5ECE5] px-3 py-2">
                <CalendarDays size={15} className="text-muted" />
                <select
                  value={afterDate}
                  onChange={(e) => setAfterDate(e.target.value)}
                  className="w-full bg-transparent text-xs text-ink outline-none"
                >
                  {observations.map((observation, index) => (
                    <option
                      key={`${observation.date}-${observation.satellite}-${index}`}
                      value={observation.date}
                    >
                      {formatDate(observation.date)} — {observation.satellite}
                    </option>
                  ))}
                </select>
              </label>

              {renderObservationDetails(afterObservation)}
            </div>
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-xl bg-[#F3F7F0] p-4">
            <ArrowLeftRight size={18} className="mt-0.5 shrink-0 text-forest" />
            <p className="text-[11px] leading-5 text-[#64766A]">
              Select two observation dates to compare their available satellite
              measurements. Photographs are illustrative examples, not
              georeferenced satellite observations of Bago Yoma.
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default SatelliteComparison;
