// Forest summary displayed on the Overview page
export interface ForestSummary {
  forestCoverage: number | null;
  forestLoss: number | null;
  forestGain: number | null;
  vegetationHealth: number | null;
}

// Monthly forest change data for charts
export interface ForestChange {
  month: string;
  loss: number;
  gain: number;
}

// Satellite observation data
export interface SatelliteObservation {
  date: string;
  satellite: "NISAR" | "Sentinel-1" | "Sentinel-2";
  vv?: number;
  vh?: number;
  ndvi?: number;
}

// Detected forest change event
export interface ChangeEvent {
  id: string;
  date: string;
  location: string;
  changeType:
    | "Potential Forest Loss"
    | "Potential Forest Gain"
    | "Unclassified";
  confidence: number | null;
  priority: "High" | "Medium" | "Low";
  status: "Pending Review" | "Reviewed" | "Confirmed" | "Rejected";
}

// Geographic area information
export interface ForestArea {
  id: string;
  name: string;
  areaKm2: number | null;
}
