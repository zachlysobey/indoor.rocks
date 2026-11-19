import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { centralRockGym } from "../companies/centralRockGym";

export const centralRockGymSyracuse: ClimbingGym = {
  name: 'Central Rock Gym Syracuse',
  website: 'https://centralrockgym.com/syracuse/',
  parent: centralRockGym,
  address: {
    streetNumber: '600',
    streetName: 'N Franklin St',
    city: 'Syracuse',
    state: 'NY',
    postalCode: '13204',
    country: 'USA',
    latitude: 43.056,
    longitude: -76.157,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
