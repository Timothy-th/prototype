import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
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
      width: 34px;
      height: 34px;
      background: #285943;
      border: 3px solid white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 17px;
      box-shadow: 0 3px 10px rgba(0,0,0,0.2);
    ">🌳</div>
  `,
  iconSize: [34, 34],
  iconAnchor: [17, 17],
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
    <section className="overflow-hidden rounded-2xl border border-[#E5ECE5] bg-white shadow-sm">
      {/* Map header */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-6">
        <div>
          <h2 className="font-heading text-base font-bold text-ink">
            Monitoring Area
          </h2>
          <p className="mt-1 text-xs text-muted">Bago Yoma, Myanmar</p>
        </div>

        <span className="rounded-full bg-[#FFF3DF] px-3 py-1 text-[10px] font-bold text-[#A47735]">
          LOCATION PREVIEW
        </span>
      </div>

      {/* Map layer selector */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-y border-[#E5ECE5] px-6 py-3">
        <span className="text-xs font-bold text-ink">Map Style</span>

        <div className="flex items-center gap-1 rounded-xl bg-[#F3F6F2] p-1">
          {(Object.keys(mapLayers) as MapStyle[]).map((style) => (
            <button
              key={style}
              onClick={() => setMapStyle(style)}
              className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
                mapStyle === style
                  ? "bg-forest text-white shadow-sm"
                  : "text-muted hover:text-forest"
              }`}
            >
              {mapLayers[style].label}
            </button>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="h-95 w-full">
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
              <strong>Bago Yoma</strong>
              <br />
              General location preview
              <br />
              Not an official monitoring boundary.
            </Popup>
          </Marker>

          <MapResizeHandler />
        </MapContainer>
      </div>

      <p className="p-4 text-[10px] leading-5 text-muted">
        Map location is approximate. Official monitoring boundaries and
        satellite-derived forest layers will be integrated after AOI
        confirmation.
      </p>
    </section>
  );
};

export default ForestMap;
