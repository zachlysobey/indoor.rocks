import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { adventureRock } from "../companies/adventureRock";

export const adventureRockBrookfield: ClimbingGym = {
  name: 'Adventure Rock Brookfield',
  website: 'https://adventurerock.com',
  parent: adventureRock,
  address: {
    streetNumber: '21250',
    streetName: 'W Capitol Dr',
    city: 'Brookfield',
    region: 'WI',
    postalCode: '53072',
    country: 'US',
    latitude: 43.089,
    longitude: -88.153,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
