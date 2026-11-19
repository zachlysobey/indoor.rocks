import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { centralRockGym } from "../companies/centralRockGym";

export const centralRockGymStoneham: ClimbingGym = {
  name: 'Central Rock Gym Stoneham',
  website: 'https://centralrockgym.com/stoneham/',
  parent: centralRockGym,
  address: {
    streetNumber: '10',
    streetName: 'Adam Rd',
    city: 'Stoneham',
    state: 'MA',
    postalCode: '02180',
    country: 'USA',
    latitude: 42.478,
    longitude: -71.111,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
