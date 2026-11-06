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

  return (
    <>
      {/* Forest cover overlay */}
      {showForest && (
        <Polygon
          positions={demoForestArea}
          pathOptions={{
            color: "#77AE68",
            fillColor: "#77AE68",
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
            color: "#D97865",
            fillColor: "#D97865",
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
            color: "#285943",
            fillOpacity: 0,
            weight: 2,
            dashArray: "6 6",
          }}
        />
      )}

      {/* Layer control */}
      <div className="leaflet-top leaflet-right">
        <div className="leaflet-control m-3 w-[210px] rounded-xl border border-[#E5ECE5] bg-white p-4 shadow-lg">
          <div className="mb-3 flex items-center gap-2 border-b border-[#E5ECE5] pb-3">
            <Layers size={17} className="text-forest" />
            <span className="text-xs font-bold text-ink">Map Layers</span>
          </div>

          {[
            {
              label: "Forest Cover",
              color: "#77AE68",
              checked: showForest,
              toggle: setShowForest,
            },
            {
              label: "Potential Forest Loss",
              color: "#D97865",
              checked: showLoss,
              toggle: setShowLoss,
            },
            {
              label: "Observation Boundary",
              color: "#285943",
              checked: showBoundary,
              toggle: setShowBoundary,
            },
          ].map((layer) => (
            <button
              key={layer.label}
              onClick={() => layer.toggle(!layer.checked)}
              className="flex w-full items-center justify-between gap-2 rounded-lg py-2 text-left hover:bg-page"
            >
              <span className="flex items-center gap-2 text-[11px] font-medium text-ink">
                <span
                  className="h-3 w-3 rounded-sm"
                  style={{ backgroundColor: layer.color }}
                />
                {layer.label}
              </span>

              {layer.checked ? (
                <Eye size={15} className="text-forest" />
              ) : (
                <EyeOff size={15} className="text-muted" />
              )}
            </button>
          ))}

          <p className="mt-2 border-t border-[#E5ECE5] pt-2 text-[9px] leading-4 text-muted">
            Illustrative overlays for interface testing only.
          </p>
        </div>
      </div>
    </>
  );
};

export default MapLayers;
