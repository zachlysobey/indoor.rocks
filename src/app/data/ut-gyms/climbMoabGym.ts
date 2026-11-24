import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const climbMoabGym: ClimbingGym = {
  name: 'Climb Moab Gym',
  website: 'https://www.climbmoabgym.com/',
  address: {
    streetNumber: '11850',
    streetName: 'S Hwy 191',
    city: 'Moab',
    region: 'UT',
    postalCode: '84532',
    country: 'US',
    latitude: 38.495,
    longitude: -109.452,
  },
  amenities: amenities('bouldering', 'top-rope', 'yoga', 'aerial-silks'),
};
