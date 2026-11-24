import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const grandWallBoulderingCoop: ClimbingGym = {
  name: 'Grand Wall Bouldering Co-op',
  description: "Member-owned co-op, and Squamish's first gym. Drop-in passes available.",
  address: {
    streetNumber: '38036',
    streetName: 'Loggers Ln',
    city: 'Squamish',
    state: 'BC',
    postalCode: 'V8B',
    country: 'Canada',
    latitude: 49.700,
    longitude: -123.152,
  },
  amenities: amenities('bouldering'),
};
