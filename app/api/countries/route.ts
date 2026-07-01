import { fetchLocationOptions } from "../location";

export async function GET() {
  return fetchLocationOptions("country", {});
}
