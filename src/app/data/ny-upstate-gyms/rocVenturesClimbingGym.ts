import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rocVenturesClimbingGym: ClimbingGym = {
  name: 'RocVentures Climbing Gym',
  website: 'https://rocventuresclimbing.com/',
  description: "Rochester's longest-running climbing gym.",
  address: {
    streetNumber: '1044',
    streetName: 'University Ave',
    city: 'Rochester',
    state: 'NY',
    postalCode: '14607',
    country: 'USA',
    latitude: 43.157,
    longitude: -77.570,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
