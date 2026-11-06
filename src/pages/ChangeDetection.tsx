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
      color: "#285943",
      bg: "#E9F1E6",
    },
    {
      title: "High Priority",
      value: highPriority,
      icon: AlertTriangle,
      color: "#D97865",
      bg: "#FCEDE9",
    },
    {
      title: "Areas Under Review",
      value: areasUnderReview,
      icon: Trees,
      color: "#B58B42",
      bg: "#FFF4DF",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Heading */}
      <section>
        <div className="flex items-center gap-2 text-xs font-semibold text-forest">
          <ScanSearch size={15} />
          FOREST CHANGE MONITORING
        </div>

        <h1 className="mt-3 font-heading text-3xl font-extrabold text-ink">
          Change Detection
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
          Identify and review potential forest changes through satellite
          observations across Bago Yoma.
        </p>
      </section>

      {/* Demo notice */}
      <div className="rounded-xl border border-[#F0DDBB] bg-[#FFF8EA] p-4">
        <p className="text-xs font-bold text-[#98713A]">DEMONSTRATION DATA</p>

        <p className="mt-1 text-[11px] leading-5 text-[#98713A]">
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
              className="rounded-2xl border border-[#E5ECE5] bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-muted">{card.title}</p>

                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: card.bg,
                    color: card.color,
                  }}
                >
                  <Icon size={20} />
                </div>
              </div>

              <h3 className="mt-5 font-heading text-3xl font-extrabold text-ink">
                {loading ? "..." : error ? "—" : card.value}
              </h3>
            </div>
          );
        })}
      </section>

      {/* Events */}
      <section className="overflow-hidden rounded-2xl border border-[#E5ECE5] bg-white shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E5ECE5] p-6">
          <div>
            <h2 className="font-heading text-base font-bold text-ink">
              Potential Change Events
            </h2>

            <p className="mt-1 text-xs text-muted">
              Illustrative events awaiting verification
            </p>
          </div>

          <span className="rounded-full bg-sage-light px-3 py-1 text-[10px] font-bold text-forest">
            {loading ? "LOADING..." : `${totalEvents} DEMO EVENTS`}
          </span>
        </div>

        <div className="divide-y divide-[#EDF1EC]">
          {loading ? (
            <p className="p-6 text-sm text-muted">Loading change events...</p>
          ) : error ? (
            <p className="p-6 text-sm text-red-600">{error}</p>
          ) : changeEvents.length === 0 ? (
            <p className="p-6 text-sm text-muted">
              No potential change events available.
            </p>
          ) : (
            changeEvents.map((event) => {
              const eventColor =
                event.priority === "High"
                  ? "#D97865"
                  : event.priority === "Medium"
                    ? "#D9A44F"
                    : "#77AE68";

              return (
                <div
                  key={event.id}
                  className="flex flex-col gap-4 p-5 transition hover:bg-[#FAFCF9] md:flex-row md:items-center"
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
                      <h3 className="text-sm font-bold text-ink">
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

                    <div className="mt-2 flex flex-wrap gap-4 text-[10px] text-muted">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {event.location}
                      </span>

                      <span className="flex items-center gap-1">
                        <CalendarDays size={12} />
                        {event.date}
                      </span>
                    </div>

                    <p className="mt-2 text-[11px] text-muted">
                      Status: {event.status}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 md:w-40">
                    <div className="flex-1">
                      <div className="mb-1 flex justify-between text-[10px]">
                        <span className="text-muted">Demo score</span>

                        <span className="font-bold text-ink">
                          {event.confidence !== null
                            ? `${event.confidence}%`
                            : "N/A"}
                        </span>
                      </div>

                      <div className="h-1.5 overflow-hidden rounded-full bg-[#EDF1EC]">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${event.confidence ?? 0}%`,
                            backgroundColor: eventColor,
                          }}
                        />
                      </div>
                    </div>

                    <ArrowUpRight size={17} className="text-muted" />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* Interpretation note */}
      <section className="rounded-2xl border border-[#E5ECE5] bg-[#F3F7F0] p-5">
        <div className="flex items-start gap-3">
          <AlertTriangle size={19} className="mt-0.5 shrink-0 text-forest" />

          <div>
            <h3 className="text-sm font-bold text-forest">
              Important: Detection is not confirmation
            </h3>

            <p className="mt-2 text-xs leading-6 text-[#64766A]">
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
