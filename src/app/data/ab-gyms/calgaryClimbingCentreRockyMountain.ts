import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { calgaryClimbingCentre } from "../companies/calgaryClimbingCentre";

export const calgaryClimbingCentreRockyMountain: ClimbingGym = {
  name: 'Calgary Climbing Centre Rocky Mountain',
  website: 'https://www.calgaryclimbing.com/locations/rocky-mountain/',
  description: 'Walls up to 65 feet, a speed wall, and an outdoor wall.',
  parent: calgaryClimbingCentre,
  address: {
    streetNumber: '10721',
    streetName: 'West Valley Rd SW',
    city: 'Calgary',
    region: 'AB',
    postalCode: 'T3B 5T2',
    country: 'CA',
    latitude: 51.083,
    longitude: -114.234,
  },
  amenities: amenities('bouldering', 'lead'),
};
