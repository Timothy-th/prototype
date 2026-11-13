import { useState } from "react";
import { Layers, Eye, EyeOff } from "lucide-react";
import { Polygon, Rectangle } from "react-leaflet";

const demoForestArea: [number, number][] = [
  [18.35, 95.65],
  [18.4, 95.78],
  [18.3, 95.88],
  [18.2, 95.82],
  [18.22, 95.68],
];

const demoLossArea: [number, number][] = [
  [18.27, 95.74],
  [18.3, 95.78],
  [18.26, 95.82],
  [18.23, 95.79],
];

const MapLayers = () => {
  const [showForest, setShowForest] = useState(true);
  const [showLoss, setShowLoss] = useState(true);
  const [showBoundary, setShowBoundary] = useState(true);

  const layers = [
    {
      label: "Forest Cover",
      color: "#4ADE80",
      checked: showForest,
      toggle: setShowForest,
    },
    {
      label: "Potential Forest Loss",
      color: "#FB7185",
      checked: showLoss,
      toggle: setShowLoss,
    },
    {
      label: "Observation Boundary",
      color: "#38BDF8",
      checked: showBoundary,
      toggle: setShowBoundary,
    },
  ];

  return (
    <>
      {/* Forest cover overlay */}
      {showForest && (
        <Polygon
          positions={demoForestArea}
          pathOptions={{
            color: "#4ADE80",
            fillColor: "#22C55E",
            fillOpacity: 0.3,
            weight: 2,
          }}
        />
      )}

      {/* Potential forest loss overlay */}
      {showLoss && (
        <Polygon
          positions={demoLossArea}
          pathOptions={{
            color: "#FB7185",
            fillColor: "#F43F5E",
            fillOpacity: 0.65,
            weight: 2,
          }}
        />
      )}

      {/* Approximate observation boundary */}
      {showBoundary && (
        <Rectangle
          bounds={[
            [18.15, 95.6],
            [18.45, 95.95],
          ]}
          pathOptions={{
            color: "#38BDF8",
            fillOpacity: 0,
            weight: 2,
            dashArray: "6 6",
          }}
        />
      )}

      {/* Dark Layer Control */}
      <div className="leaflet-top leaflet-right">
        <div className="leaflet-control m-3 w-[220px] rounded-xl border border-slate-700/80 bg-[#111827]/95 p-4 shadow-2xl backdrop-blur-md">
          {/* Header */}
          <div className="mb-3 flex items-center gap-2 border-b border-slate-700 pb-3">
            <Layers size={17} className="text-emerald-400" />
            <span className="text-xs font-bold tracking-wide text-slate-100">
              MAP LAYERS
            </span>
          </div>

          {/* Layer Options */}
          {layers.map((layer) => (
            <button
              key={layer.label}
              onClick={() => layer.toggle(!layer.checked)}
              className="flex w-full items-center justify-between gap-2 rounded-lg px-2 py-2.5 text-left transition-colors hover:bg-slate-700/60"
            >
              <span className="flex items-center gap-2 text-[11px] font-medium text-slate-300">
                <span
                  className="h-3 w-3 rounded-sm ring-1 ring-white/20"
                  style={{ backgroundColor: layer.color }}
                />
                {layer.label}
              </span>

              {layer.checked ? (
                <Eye size={15} className="shrink-0 text-emerald-400" />
              ) : (
                <EyeOff size={15} className="shrink-0 text-slate-500" />
              )}
            </button>
          ))}

          {/* Footer */}
          <p className="mt-2 border-t border-slate-700 pt-3 text-[9px] leading-4 text-slate-500">
            Illustrative overlays for interface testing only.
          </p>
        </div>
      </div>
    </>
  );
};

export default MapLayers;
