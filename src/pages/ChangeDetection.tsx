import {
  AlertTriangle,
  Trees,
  Activity,
  MapPin,
  CalendarDays,
  ArrowUpRight,
  ScanSearch,
} from "lucide-react";

import { useEffect, useState } from "react";
import { forestAPI } from "../services/api";
import type { ChangeEvent } from "../types/forest";

const ChangeDetection = () => {
  const [changeEvents, setChangeEvents] = useState<ChangeEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await forestAPI.getChangeEvents();
        setChangeEvents(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load change events.");
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  // Calculate summary values from the loaded events
  const totalEvents = changeEvents.length;

  const highPriority = changeEvents.filter(
    (event) => event.priority === "High",
  ).length;

  const areasUnderReview = changeEvents.filter(
    (event) => event.status === "Pending Review",
  ).length;

  const summaryCards = [
    {
      title: "Potential Change Events",
      value: totalEvents,
      icon: ScanSearch,
      color: "#34D399",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
    {
      title: "High Priority",
      value: highPriority,
      icon: AlertTriangle,
      color: "#FB7185",
      bg: "bg-rose-500/10",
      border: "border-rose-500/20",
    },
    {
      title: "Areas Under Review",
      value: areasUnderReview,
      icon: Trees,
      color: "#FBBF24",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
    },
  ];

  return (
    <div className="space-y-8 text-slate-100">
      {/* Heading */}
      <section>
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-400">
          <ScanSearch size={15} />
          FOREST CHANGE MONITORING
        </div>

        <h1 className="mt-3 font-heading text-3xl font-extrabold text-slate-100">
          Change Detection
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
          Identify and review potential forest changes through satellite
          observations across Bago Yoma.
        </p>
      </section>

      {/* Demo notice */}
      <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">
        <p className="text-xs font-bold tracking-wider text-amber-400">
          DEMONSTRATION DATA
        </p>

        <p className="mt-1 text-[11px] leading-5 text-amber-200/70">
          All events, locations, dates, and confidence scores below are
          fabricated examples for interface testing. They are not actual
          forest-loss detections.
        </p>
      </div>

      {/* Summary cards */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {summaryCards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-2xl border border-[#334155] bg-[#111827] p-5 shadow-lg shadow-black/10 transition hover:border-slate-600"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-slate-400">
                  {card.title}
                </p>

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border ${card.bg} ${card.border}`}
                  style={{ color: card.color }}
                >
                  <Icon size={20} />
                </div>
              </div>

              <h3 className="mt-5 font-heading text-3xl font-extrabold text-slate-100">
                {loading ? "..." : error ? "—" : card.value}
              </h3>
            </div>
          );
        })}
      </section>

      {/* Events */}
      <section className="overflow-hidden rounded-2xl border border-[#334155] bg-[#111827] shadow-lg shadow-black/10">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700 p-6">
          <div>
            <h2 className="font-heading text-base font-bold text-slate-100">
              Potential Change Events
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Illustrative events awaiting verification
            </p>
          </div>

          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[10px] font-bold text-emerald-400">
            {loading ? "LOADING..." : `${totalEvents} DEMO EVENTS`}
          </span>
        </div>

        <div className="divide-y divide-slate-700/70">
          {loading ? (
            <p className="p-6 text-sm text-slate-400">
              Loading change events...
            </p>
          ) : error ? (
            <p className="p-6 text-sm text-rose-400">{error}</p>
          ) : changeEvents.length === 0 ? (
            <p className="p-6 text-sm text-slate-400">
              No potential change events available.
            </p>
          ) : (
            changeEvents.map((event) => {
              const eventColor =
                event.priority === "High"
                  ? "#FB7185"
                  : event.priority === "Medium"
                    ? "#FBBF24"
                    : "#4ADE80";

              return (
                <div
                  key={event.id}
                  className="flex flex-col gap-4 p-5 transition-colors hover:bg-slate-800/40 md:flex-row md:items-center"
                >
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: `${eventColor}18`,
                      color: eventColor,
                    }}
                  >
                    <Activity size={21} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-bold text-slate-100">
                        {event.changeType}
                      </h3>

                      <span
                        className="rounded-full px-2.5 py-1 text-[9px] font-bold"
                        style={{
                          backgroundColor: `${eventColor}18`,
                          color: eventColor,
                        }}
                      >
                        {event.priority} Priority
                      </span>
                    </div>

                    <div className="mt-2 flex flex-wrap gap-4 text-[10px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {event.location}
                      </span>

                      <span className="flex items-center gap-1">
                        <CalendarDays size={12} />
                        {event.date}
                      </span>
                    </div>

                    <p className="mt-2 text-[11px] text-slate-500">
                      Status: {event.status}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 md:w-40">
                    <div className="flex-1">
                      <div className="mb-1 flex justify-between text-[10px]">
                        <span className="text-slate-500">Demo score</span>

                        <span className="font-bold text-slate-200">
                          {event.confidence !== null
                            ? `${event.confidence}%`
                            : "N/A"}
                        </span>
                      </div>

                      <div className="h-1.5 overflow-hidden rounded-full bg-slate-700">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${event.confidence ?? 0}%`,
                            backgroundColor: eventColor,
                          }}
                        />
                      </div>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="shrink-0 text-slate-500"
                    />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* Interpretation note */}
      <section className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
        <div className="flex items-start gap-3">
          <AlertTriangle size={19} className="mt-0.5 shrink-0 text-cyan-400" />

          <div>
            <h3 className="text-sm font-bold text-cyan-300">
              Important: Detection is not confirmation
            </h3>

            <p className="mt-2 text-xs leading-6 text-slate-400">
              Changes in SAR backscatter can result from soil moisture,
              vegetation structure, surface conditions, or other factors.
              Potential events should be checked against optical imagery,
              forest-cover references, and additional observations before being
              classified as deforestation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChangeDetection;
