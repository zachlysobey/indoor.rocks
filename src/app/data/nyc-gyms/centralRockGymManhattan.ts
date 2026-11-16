import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { centralRockGym } from "../companies/centralRockGym";

export const centralRockGymManhattan: ClimbingGym = {
  name: 'Central Rock Gym Manhattan',
  website: 'https://centralrockgym.com/manhattan/',
  parent: centralRockGym,
  address: {
    streetNumber: '21',
    streetName: 'West End Ave',
    city: 'New York',
    state: 'NY',
    postalCode: '10069',
    country: 'USA',
    latitude: 40.773,
    longitude: -73.990,
  },
  amenities: amenities('bouldering', 'top-rope'),
};
