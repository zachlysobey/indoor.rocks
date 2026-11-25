import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const wallnutsClimbingCentre: ClimbingGym = {
  name: 'Wallnuts Climbing Centre',
  website: 'https://wallnutsclimbing.com',
  description: "Newfoundland's first climbing gym, opened in 1995.",
  address: {
    streetNumber: '57',
    streetName: 'Old Pennywell Rd, Unit F',
    city: "St. John's",
    region: 'NL',
    postalCode: 'A1E 6A8',
    country: 'CA',
    latitude: 47.557,
    longitude: -52.745,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
