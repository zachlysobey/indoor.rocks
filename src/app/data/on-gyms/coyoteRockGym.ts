import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const coyoteRockGym: ClimbingGym = {
  name: 'Coyote Rock Gym',
  website: 'https://coyoterockgym.ca',
  description: "Ottawa's first climbing gym, open since 1992.",
  address: {
    streetNumber: '1737B',
    streetName: 'St. Laurent Blvd',
    city: 'Ottawa',
    region: 'ON',
    postalCode: 'K1G 3V4',
    country: 'CA',
    latitude: 45.404,
    longitude: -75.627,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
