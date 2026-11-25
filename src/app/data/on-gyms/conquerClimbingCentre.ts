import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const conquerClimbingCentre: ClimbingGym = {
  name: 'Conquer Climbing Centre',
  website: 'https://conquerclimbing.ca',
  address: {
    streetNumber: '34',
    streetName: 'Dalkeith Dr, Building 2',
    city: 'Brantford',
    region: 'ON',
    postalCode: 'N3P 1N6',
    country: 'CA',
    latitude: 43.180,
    longitude: -80.239,
  },
  amenities: amenities('bouldering', 'auto-belays', 'yoga'),
};
