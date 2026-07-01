import { NextRequest, NextResponse } from "next/server";
import { fetchLocationOptions } from "../location";

export async function GET(request: NextRequest) {
  const state = request.nextUrl.searchParams.get("state") ?? "";

  if (!state) {
    return NextResponse.json({ options: [] });
  }

  return fetchLocationOptions("city", { state });
}
