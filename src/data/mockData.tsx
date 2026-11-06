import type {
  ForestSummary,
  ForestChange,
  SatelliteObservation,
  ChangeEvent,
} from "../types/forest";

// Clearly marked placeholder values.
// These are NOT real measurements from Bago Yoma.
export const mockForestSummary: ForestSummary = {
  forestCoverage: null,
  forestLoss: null,
  forestGain: null,
  vegetationHealth: null,
};

// Illustrative chart data for frontend testing only.
export const mockForestChanges: ForestChange[] = [
  { month: "Jan", loss: 12, gain: 5 },
  { month: "Feb", loss: 18, gain: 8 },
  { month: "Mar", loss: 10, gain: 6 },
  { month: "Apr", loss: 22, gain: 9 },
  { month: "May", loss: 15, gain: 7 },
  { month: "Jun", loss: 19, gain: 11 },
];

// Placeholder observations, not actual satellite measurements.
export const mockSatelliteObservations: SatelliteObservation[] = [
  {
    date: "2026-01-15",
    satellite: "NISAR",
    vv: -12.5,
    vh: -19.2,
  },
  {
    date: "2026-02-15",
    satellite: "NISAR",
    vv: -13.1,
    vh: -20.0,
  },
  {
    date: "2026-03-15",
    satellite: "NISAR",
    vv: -11.8,
    vh: -18.7,
  },
  {
    date: "2026-04-15",
    satellite: "NISAR",
    vv: -14.2,
    vh: -21.1,
  },
  {
    date: "2026-05-15",
    satellite: "NISAR",
    vv: -13.4,
    vh: -19.8,
  },
  {
    date: "2026-06-15",
    satellite: "NISAR",
    vv: -12.1,
    vh: -18.9,
  },
  {
    date: "2026-01-15",
    satellite: "Sentinel-2",
    ndvi: 0.72,
  },
  {
    date: "2026-02-15",
    satellite: "Sentinel-2",
    ndvi: 0.75,
  },
  {
    date: "2026-03-15",
    satellite: "Sentinel-2",
    ndvi: 0.68,
  },
  {
    date: "2026-04-15",
    satellite: "Sentinel-2",
    ndvi: 0.61,
  },
  {
    date: "2026-05-15",
    satellite: "Sentinel-2",
    ndvi: 0.58,
  },
  {
    date: "2026-06-15",
    satellite: "Sentinel-2",
    ndvi: 0.65,
  },
];
// Illustrative change events for interface testing only.
export const mockChangeEvents: ChangeEvent[] = [
  {
    id: "DEMO-001",
    date: "2026-03-12",
    location: "Illustrative Area A",
    changeType: "Potential Forest Loss",
    confidence: 82,
    priority: "High",
    status: "Pending Review",
  },
  {
    id: "DEMO-002",
    date: "2026-04-08",
    location: "Illustrative Area B",
    changeType: "Potential Forest Gain",
    confidence: 67,
    priority: "Medium",
    status: "Pending Review",
  },
  {
    id: "DEMO-003",
    date: "2026-05-21",
    location: "Illustrative Area C",
    changeType: "Unclassified",
    confidence: null,
    priority: "Low",
    status: "Pending Review",
  },
];
