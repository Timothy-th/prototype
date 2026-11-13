import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { MapPin, Satellite, Layers3, Info } from "lucide-react";

import MapLayers from "./map/MapLayers";

type MapStyle = "satellite" | "street" | "terrain";

const mapLayers = {
  satellite: {
    label: "Satellite",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    attribution: "Tiles &copy; Esri",
  },
  street: {
    label: "Street",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  },
  terrain: {
    label: "Terrain",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
    attribution: "Tiles &copy; Esri",
  },
};

const forestIcon = L.divIcon({
  className: "",
  html: `
    <div style="
      width: 36px;
      height: 36px;
      background: #064E3B;
      border: 2px solid #4ADE80;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 18px;
      box-shadow: 0 3px 14px rgba(0,0,0,0.55);
    ">🌳</div>
  `,
  iconSize: [36, 36],
  iconAnchor: [18, 18],
});

const MapResizeHandler = () => {
  const map = useMap();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      map.invalidateSize();
    }, 100);

    return () => window.clearTimeout(timer);
  }, [map]);

  return null;
};

const ForestMap = () => {
  const [mapStyle, setMapStyle] = useState<MapStyle>("satellite");

  const selectedLayer = mapLayers[mapStyle];

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-800 bg-[#111827]">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-5">
        <div>
          <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[1.8px] text-emerald-400">
            <MapPin size={14} />
            Geographic Monitoring
          </div>

          <h2 className="font-heading text-lg font-bold text-slate-100">
            Forest Monitoring Map
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Explore the Central Bago Yoma study area
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-lg border border-amber-500/20 bg-amber-500/10 px-3 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          <span className="text-[10px] font-bold tracking-wide text-amber-400">
            LOCATION PREVIEW
          </span>
        </div>
      </div>

      {/* Map Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-y border-slate-800 bg-[#0B1220]/50 px-6 py-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
          <Layers3 size={15} className="text-emerald-400" />
          Map Layers
        </div>

        <div className="flex items-center gap-1 rounded-xl border border-slate-700/80 bg-[#111827] p-1">
          {(Object.keys(mapLayers) as MapStyle[]).map((style) => (
            <button
              key={style}
              onClick={() => setMapStyle(style)}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition-all ${
                mapStyle === style
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-950/40"
                  : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"
              }`}
            >
              {style === "satellite" && <Satellite size={14} />}
              {style === "street" && <MapPin size={14} />}
              {style === "terrain" && <Layers3 size={14} />}
              {mapLayers[style].label}
            </button>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="relative h-95 w-full bg-[#0B1220]">
        <MapContainer
          center={[18.2, 95.8]}
          zoom={8}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <TileLayer
            key={mapStyle}
            attribution={selectedLayer.attribution}
            url={selectedLayer.url}
          />

          <MapLayers />

          <Marker position={[18.2, 95.8]} icon={forestIcon}>
            <Popup>
              <strong>Central Bago Yoma</strong>
              <br />
              General location preview
              <br />
              Not an official monitoring boundary.
            </Popup>
          </Marker>

          <MapResizeHandler />
        </MapContainer>
      </div>

      {/* Map Information */}
      <div className="flex items-start gap-3 border-t border-slate-800 bg-[#0B1220]/60 px-6 py-4">
        <Info size={15} className="mt-0.5 shrink-0 text-slate-500" />

        <p className="text-[10px] leading-relaxed text-slate-500">
          The map currently shows an approximate study-area location. Official
          AOI boundaries and processed satellite-derived forest layers will be
          added after spatial-data integration.
        </p>
      </div>
    </section>
  );
};

export default ForestMap;
