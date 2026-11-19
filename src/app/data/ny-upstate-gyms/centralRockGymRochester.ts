import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { centralRockGym } from "../companies/centralRockGym";

export const centralRockGymRochester: ClimbingGym = {
  name: 'Central Rock Gym Rochester',
  website: 'https://centralrockgym.com/rochester/',
  parent: centralRockGym,
  address: {
    streetNumber: '725',
    streetName: 'Averill Ave',
    city: 'Rochester',
    state: 'NY',
    postalCode: '14607',
    country: 'USA',
    latitude: 43.144,
    longitude: -77.594,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'yoga'),
};
