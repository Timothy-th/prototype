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
    color: "#285943",
    bg: "#E9F1E6",
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
    color: "#5479A3",
    bg: "#EDF3FA",
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
    color: "#77AE68",
    bg: "#EFF6EA",
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
    color: "#A47735",
    bg: "#FFF4DF",
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
    color: "#9872A8",
    bg: "#F4EFF8",
    url: "https://glad.earthengine.app/view/global-forest-change",
    status: "Planned",
  },
];

const statusStyles: Record<
  SourceStatus,
  { color: string; bg: string; icon: typeof CheckCircle2 }
> = {
  "Mock Data": {
    color: "#A47735",
    bg: "#FFF4DF",
    icon: FlaskConical,
  },
  Planned: {
    color: "#829087",
    bg: "#F0F2F0",
    icon: Clock3,
  },
  Integrated: {
    color: "#285943",
    bg: "#E9F1E6",
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
    <div className="space-y-8">
      {/* Heading */}
      <section>
        <div className="flex items-center gap-2 text-xs font-semibold text-forest">
          <Database size={15} />
          EARTH OBSERVATION DATA
        </div>

        <h1 className="mt-3 font-heading text-3xl font-extrabold text-ink">
          Data Sources
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
          Explore the satellite missions and reference datasets that support our
          forest-monitoring workflow in Bago Yoma.
        </p>
      </section>

      {/* Integration Summary */}
      <section className="rounded-2xl border border-[#E5ECE5] bg-white p-5 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sage-light text-forest">
            <Database size={20} />
          </div>

          <div>
            <h2 className="text-sm font-bold text-ink">
              Data Integration Status
            </h2>

            <p className="mt-1 text-xs leading-5 text-muted">
              Track the current integration progress of our planned datasets.
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl bg-[#FFF8E9] p-4">
            <p className="text-xs text-[#A47735]">Mock Data</p>
            <p className="mt-1 text-2xl font-extrabold text-ink">{mockCount}</p>
          </div>

          <div className="rounded-xl bg-[#F0F2F0] p-4">
            <p className="text-xs text-muted">Planned</p>
            <p className="mt-1 text-2xl font-extrabold text-ink">
              {plannedCount}
            </p>
          </div>

          <div className="rounded-xl bg-[#E9F1E6] p-4">
            <p className="text-xs text-forest">Integrated</p>
            <p className="mt-1 text-2xl font-extrabold text-ink">
              {integratedCount}
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#D9A44F]" />
          <span className="text-[10px] font-bold text-[#A47735]">
            PROTOTYPE — LIVE DATA INTEGRATION IN PROGRESS
          </span>
        </div>
      </section>

      {/* Source Cards */}
      <section>
        <div className="mb-4">
          <h2 className="font-heading text-base font-bold text-ink">
            Satellite & Reference Datasets
          </h2>

          <p className="mt-1 text-xs text-muted">
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
                className="rounded-2xl border border-[#E5ECE5] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
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
                      <h3 className="font-heading text-base font-extrabold text-ink">
                        {source.name}
                      </h3>

                      <p className="mt-0.5 text-[10px] text-muted">
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

                <p className="mt-3 text-xs leading-6 text-muted">
                  {source.description}
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl bg-[#F7F9F6] p-3">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-wide text-muted">
                      Contribution
                    </p>

                    <p className="mt-1 text-[11px] font-bold text-ink">
                      {source.contribution}
                    </p>
                  </div>

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-wide text-muted">
                      Organization
                    </p>

                    <p className="mt-1 text-[11px] font-bold text-ink">
                      {source.organization}
                    </p>
                  </div>
                </div>

                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-forest hover:underline"
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
      <section className="rounded-2xl border border-[#E5ECE5] bg-[#F3F7F0] p-6">
        <h2 className="font-heading text-base font-bold text-forest">
          How Our Data Works Together
        </h2>

        <p className="mt-2 text-xs leading-6 text-[#64766A]">
          Radar observations help identify changes in surface and vegetation
          structure. Optical imagery, canopy measurements, and historical forest
          references provide additional evidence to interpret and evaluate those
          changes. Radar anomalies alone do not confirm deforestation.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl bg-white p-4">
            <Satellite size={20} className="text-forest" />
            <p className="mt-3 text-xs font-bold text-ink">1. Observe</p>
            <p className="mt-1 text-[10px] leading-5 text-muted">
              Collect radar and optical observations.
            </p>
          </div>

          <div className="rounded-xl bg-white p-4">
            <Radar size={20} className="text-forest" />
            <p className="mt-3 text-xs font-bold text-ink">2. Analyze</p>
            <p className="mt-1 text-[10px] leading-5 text-muted">
              Process observations and identify potential changes.
            </p>
          </div>

          <div className="rounded-xl bg-white p-4">
            <CheckCircle2 size={20} className="text-forest" />
            <p className="mt-3 text-xs font-bold text-ink">3. Validate</p>
            <p className="mt-1 text-[10px] leading-5 text-muted">
              Compare with supporting evidence before classification.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataSources;
