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

// Mock data is enabled by default.
// Set VITE_USE_MOCK_DATA=false to use the real backend.
const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA !== "false";

const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8000"
).replace(/\/$/, "");

async function fetchAPI<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const errorMessage = await response.text();

    throw new Error(
      `API request failed (${response.status}): ${
        errorMessage || response.statusText
      }`,
    );
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
