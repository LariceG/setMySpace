import { NextRequest, NextResponse } from "next/server";
import { fetchLocationOptions } from "../location";

export async function GET(request: NextRequest) {
  const country = request.nextUrl.searchParams.get("country") ?? "";

  if (!country) {
    return NextResponse.json({ options: [] });
  }

  return fetchLocationOptions("state", { country });
}
