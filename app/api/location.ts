import { NextResponse } from "next/server";

const API_BASE = "https://api-dev.autoby24.ch/api/core";

type ApiItem = string | number | Record<string, unknown>;

function pickArray(payload: unknown): ApiItem[] {
  if (Array.isArray(payload)) {
    return payload as ApiItem[];
  }

  if (!payload || typeof payload !== "object") {
    return [];
  }

  const objectPayload = payload as Record<string, unknown>;
  const possibleKeys = ["data", "records", "items", "results", "countries", "states", "cities"];

  for (const key of possibleKeys) {
    const value = objectPayload[key];
    if (Array.isArray(value)) {
      return value as ApiItem[];
    }
  }

  return [];
}

function labelFromItem(item: ApiItem): string {
  if (typeof item === "string" || typeof item === "number") {
    return String(item);
  }

  const possibleKeys = ["name", "title", "label", "country", "state", "city"];

  for (const key of possibleKeys) {
    const value = item[key];
    if (typeof value === "string" || typeof value === "number") {
      return String(value);
    }
  }

  return "";
}

export async function fetchLocationOptions(path: string, params: Record<string, string>) {
  const url = new URL(`${API_BASE}/${path}`);

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      url.searchParams.set(key, value);
    }
  });

  url.searchParams.set("limit", "all");

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json"
      },
      next: {
        revalidate: 3600
      }
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Location API returned ${response.status}` },
        { status: response.status }
      );
    }

    const payload = await response.json();
    const options = pickArray(payload)
      .map(labelFromItem)
      .filter(Boolean)
      .filter((value, index, values) => values.indexOf(value) === index)
      .sort((a, b) => a.localeCompare(b));

    return NextResponse.json({ options });
  } catch {
    return NextResponse.json({ error: "Unable to load location options" }, { status: 500 });
  }
}
