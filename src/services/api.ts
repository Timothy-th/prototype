import {
  mockForestSummary,
  mockForestChanges,
  mockSatelliteObservations,
  mockChangeEvents,
} from "../data/mockData";

import type {
  ForestSummary,
  ForestChange,
  SatelliteObservation,
  ChangeEvent,
} from "../types/forest";

// Enable mock data until the backend is ready.
const USE_MOCK_DATA = true;

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

async function fetchAPI<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export const forestAPI = {
  getSummary: (): Promise<ForestSummary> =>
    USE_MOCK_DATA
      ? Promise.resolve(mockForestSummary)
      : fetchAPI<ForestSummary>("/api/summary"),

  getChanges: (): Promise<ForestChange[]> =>
    USE_MOCK_DATA
      ? Promise.resolve(mockForestChanges)
      : fetchAPI<ForestChange[]>("/api/changes"),

  getObservations: (): Promise<SatelliteObservation[]> =>
    USE_MOCK_DATA
      ? Promise.resolve(mockSatelliteObservations)
      : fetchAPI<SatelliteObservation[]>("/api/observations"),

  getChangeEvents: (): Promise<ChangeEvent[]> =>
    USE_MOCK_DATA
      ? Promise.resolve(mockChangeEvents)
      : fetchAPI<ChangeEvent[]>("/api/change-events"),
};
