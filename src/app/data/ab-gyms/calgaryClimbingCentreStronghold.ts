import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { calgaryClimbingCentre } from "../companies/calgaryClimbingCentre";

export const calgaryClimbingCentreStronghold: ClimbingGym = {
  name: 'Calgary Climbing Centre Stronghold',
  website: 'https://www.calgaryclimbing.com/locations/stronghold/',
  description: 'Open since 1995; known for its long routes.',
  parent: calgaryClimbingCentre,
  address: {
    streetNumber: '140',
    streetName: '15 Ave NW',
    city: 'Calgary',
    region: 'AB',
    postalCode: 'T2M 0G6',
    country: 'CA',
    latitude: 51.067,
    longitude: -114.065,
  },
  amenities: amenities('bouldering', 'lead', 'auto-belays', 'free-weights'),
};
