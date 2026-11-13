import {
  Satellite,
  Radar,
  Leaf,
  Trees,
  Database,
  ExternalLink,
  CheckCircle2,
  Clock3,
  FlaskConical,
} from "lucide-react";

type SourceStatus = "Mock Data" | "Planned" | "Integrated";

interface DataSource {
  name: string;
  fullName: string;
  category: string;
  description: string;
  contribution: string;
  organization: string;
  icon: typeof Satellite;
  color: string;
  bg: string;
  url: string;
  status: SourceStatus;
}

const sources: DataSource[] = [
  {
    name: "NISAR",
    fullName: "NASA-ISRO Synthetic Aperture Radar",
    category: "PRIMARY RADAR DATA",
    description:
      "Provides L-band and S-band SAR observations. Our main source for monitoring changes in forest structure and surface conditions.",
    contribution: "L-band + S-band SAR",
    organization: "NASA / ISRO",
    icon: Satellite,
    color: "#34D399",
    bg: "rgba(16, 185, 129, 0.12)",
    url: "https://nisar.jpl.nasa.gov/",
    status: "Mock Data",
  },
  {
    name: "Sentinel-1",
    fullName: "Copernicus Sentinel-1 Mission",
    category: "SUPPLEMENTARY RADAR",
    description:
      "Provides C-band SAR observations that can complement NISAR when comparing radar-based changes.",
    contribution: "C-band SAR",
    organization: "European Space Agency",
    icon: Radar,
    color: "#38BDF8",
    bg: "rgba(56, 189, 248, 0.12)",
    url: "https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-1",
    status: "Planned",
  },
  {
    name: "Sentinel-2",
    fullName: "Copernicus Sentinel-2 Mission",
    category: "OPTICAL OBSERVATIONS",
    description:
      "Provides multispectral optical imagery. Vegetation indices such as NDVI can help assess changes in vegetation conditions.",
    contribution: "Optical imagery + NDVI",
    organization: "European Space Agency",
    icon: Leaf,
    color: "#4ADE80",
    bg: "rgba(74, 222, 128, 0.12)",
    url: "https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-2",
    status: "Mock Data",
  },
  {
    name: "GEDI",
    fullName: "Global Ecosystem Dynamics Investigation",
    category: "CANOPY STRUCTURE",
    description:
      "Provides lidar measurements of forest canopy structure and height, offering valuable supporting information.",
    contribution: "Canopy height + structure",
    organization: "NASA",
    icon: Trees,
    color: "#FBBF24",
    bg: "rgba(251, 191, 36, 0.12)",
    url: "https://gedi.umd.edu/",
    status: "Planned",
  },
  {
    name: "Global Forest Change",
    fullName: "Global Forest Change Dataset",
    category: "REFERENCE DATA",
    description:
      "Provides historical tree-cover extent and loss information that can help compare and validate detected changes.",
    contribution: "Tree-cover loss reference",
    organization: "University of Maryland",
    icon: Database,
    color: "#C084FC",
    bg: "rgba(192, 132, 252, 0.12)",
    url: "https://glad.earthengine.app/view/global-forest-change",
    status: "Planned",
  },
];

const statusStyles: Record<
  SourceStatus,
  { color: string; bg: string; icon: typeof CheckCircle2 }
> = {
  "Mock Data": {
    color: "#FBBF24",
    bg: "rgba(251, 191, 36, 0.12)",
    icon: FlaskConical,
  },
  Planned: {
    color: "#94A3B8",
    bg: "rgba(148, 163, 184, 0.12)",
    icon: Clock3,
  },
  Integrated: {
    color: "#34D399",
    bg: "rgba(16, 185, 129, 0.12)",
    icon: CheckCircle2,
  },
};

const DataSources = () => {
  const mockCount = sources.filter(
    (source) => source.status === "Mock Data",
  ).length;

  const plannedCount = sources.filter(
    (source) => source.status === "Planned",
  ).length;

  const integratedCount = sources.filter(
    (source) => source.status === "Integrated",
  ).length;

  return (
    <div className="space-y-8 text-slate-100">
      {/* Heading */}
      <section>
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-400">
          <Database size={15} />
          EARTH OBSERVATION DATA
        </div>

        <h1 className="mt-3 font-heading text-3xl font-extrabold text-slate-100">
          Data Sources
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
          Explore the satellite missions and reference datasets that support our
          forest-monitoring workflow in Bago Yoma.
        </p>
      </section>

      {/* Integration Summary */}
      <section className="rounded-2xl border border-[#334155] bg-[#111827] p-5 shadow-lg shadow-black/10">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
            <Database size={20} />
          </div>

          <div>
            <h2 className="text-sm font-bold text-slate-100">
              Data Integration Status
            </h2>

            <p className="mt-1 text-xs leading-5 text-slate-400">
              Track the current integration progress of our planned datasets.
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-4">
            <p className="text-xs text-amber-400">Mock Data</p>
            <p className="mt-1 text-2xl font-extrabold text-slate-100">
              {mockCount}
            </p>
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-4">
            <p className="text-xs text-slate-400">Planned</p>
            <p className="mt-1 text-2xl font-extrabold text-slate-100">
              {plannedCount}
            </p>
          </div>

          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4">
            <p className="text-xs text-emerald-400">Integrated</p>
            <p className="mt-1 text-2xl font-extrabold text-slate-100">
              {integratedCount}
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
          <span className="text-[10px] font-bold tracking-wide text-amber-400">
            PROTOTYPE — LIVE DATA INTEGRATION IN PROGRESS
          </span>
        </div>
      </section>

      {/* Source Cards */}
      <section>
        <div className="mb-4">
          <h2 className="font-heading text-base font-bold text-slate-100">
            Satellite & Reference Datasets
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Five planned sources for multi-sensor forest monitoring
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          {sources.map((source) => {
            const Icon = source.icon;
            const StatusIcon = statusStyles[source.status].icon;
            const statusStyle = statusStyles[source.status];

            return (
              <article
                key={source.name}
                className="rounded-2xl border border-[#334155] bg-[#111827] p-5 shadow-lg shadow-black/10 transition duration-200 hover:-translate-y-0.5 hover:border-slate-600 hover:shadow-xl"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: source.bg,
                        color: source.color,
                      }}
                    >
                      <Icon size={23} />
                    </div>

                    <div>
                      <h3 className="font-heading text-base font-extrabold text-slate-100">
                        {source.name}
                      </h3>

                      <p className="mt-0.5 text-[10px] text-slate-500">
                        {source.fullName}
                      </p>
                    </div>
                  </div>

                  <span
                    className="rounded-full px-2 py-1 text-[9px] font-bold"
                    style={{
                      backgroundColor: source.bg,
                      color: source.color,
                    }}
                  >
                    {source.category}
                  </span>
                </div>

                <div
                  className="mt-4 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1"
                  style={{
                    backgroundColor: statusStyle.bg,
                    color: statusStyle.color,
                  }}
                >
                  <StatusIcon size={12} />
                  <span className="text-[10px] font-bold">{source.status}</span>
                </div>

                <p className="mt-3 text-xs leading-6 text-slate-400">
                  {source.description}
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl border border-slate-700/70 bg-[#0B1220] p-3">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-500">
                      Contribution
                    </p>

                    <p className="mt-1 text-[11px] font-bold text-slate-200">
                      {source.contribution}
                    </p>
                  </div>

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-500">
                      Organization
                    </p>

                    <p className="mt-1 text-[11px] font-bold text-slate-200">
                      {source.organization}
                    </p>
                  </div>
                </div>

                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-emerald-400 transition hover:text-emerald-300"
                >
                  Explore dataset
                  <ExternalLink size={13} />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      {/* Workflow */}
      <section className="rounded-2xl border border-[#334155] bg-[#111827] p-6">
        <h2 className="font-heading text-base font-bold text-slate-100">
          How Our Data Works Together
        </h2>

        <p className="mt-2 text-xs leading-6 text-slate-400">
          Radar observations help identify changes in surface and vegetation
          structure. Optical imagery, canopy measurements, and historical forest
          references provide additional evidence to interpret and evaluate those
          changes. Radar anomalies alone do not confirm deforestation.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-700 bg-[#0B1220] p-4">
            <Satellite size={20} className="text-emerald-400" />

            <p className="mt-3 text-xs font-bold text-slate-100">1. Observe</p>

            <p className="mt-1 text-[10px] leading-5 text-slate-400">
              Collect radar and optical observations.
            </p>
          </div>

          <div className="rounded-xl border border-slate-700 bg-[#0B1220] p-4">
            <Radar size={20} className="text-cyan-400" />

            <p className="mt-3 text-xs font-bold text-slate-100">2. Analyze</p>

            <p className="mt-1 text-[10px] leading-5 text-slate-400">
              Process observations and identify potential changes.
            </p>
          </div>

          <div className="rounded-xl border border-slate-700 bg-[#0B1220] p-4">
            <CheckCircle2 size={20} className="text-emerald-400" />

            <p className="mt-3 text-xs font-bold text-slate-100">3. Validate</p>

            <p className="mt-1 text-[10px] leading-5 text-slate-400">
              Compare with supporting evidence before classification.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataSources;
