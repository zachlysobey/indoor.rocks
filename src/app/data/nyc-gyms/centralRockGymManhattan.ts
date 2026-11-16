import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenityMap";
import { centralRockGym } from "../companies";

export const centralRockGymManhattan: ClimbingGym = {
  name: 'Central Rock Gym Manhattan',
  parent: centralRockGym,
  address: {
    streetNumber: '21',
    streetName: 'West End Ave',
    city: 'New York',
    state: 'NY',
    postalCode: '10069',
    country: 'USA',
  },
  amenities: amenities('bouldering', 'top-rope'),
};
