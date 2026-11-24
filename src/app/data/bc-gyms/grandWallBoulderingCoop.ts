import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const grandWallBoulderingCoop: ClimbingGym = {
  name: 'Grand Wall Bouldering Co-op',
  description: "Member-owned co-op, and Squamish's first gym. Drop-in passes available.",
  address: {
    streetNumber: '38036',
    streetName: 'Loggers Ln',
    city: 'Squamish',
    region: 'BC',
    postalCode: 'V8B',
    country: 'CA',
    latitude: 49.699,
    longitude: -123.152,
  },
  amenities: amenities('bouldering'),
};
