import type { Metadata } from "next";
import type { ClimbingGym } from "./dataModel";
import { gymRoutes } from "./climbing-gyms/gymRoutes";
import { gymSlug } from "./gymSlug";

// Gym-specific metadata for search snippets and links shared in messaging apps.
// Stick to the known name and location; amenities may be incomplete or unverified.
export function gymPageMetadata(gym: ClimbingGym): Metadata {
  const title = `${gym.name} · indoor.rocks`;
  const description = `Find ${gym.name} in ${gym.address.city}, ${gym.address.region}. View its address${gym.amenities.length ? " and listed amenities" : ""} on indoor.rocks${gym.website ? ", with a link to the gym's website" : ""}.`;
  const url = gymRoutes.page(gymSlug(gym));
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", title, description, url },
    twitter: { card: "summary", title, description },
  };
}
