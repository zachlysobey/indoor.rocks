import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { adventureRock } from "../companies/adventureRock";

export const adventureRockMilwaukee: ClimbingGym = {
  name: 'Adventure Rock Milwaukee',
  website: 'https://adventurerock.com',
  parent: adventureRock,
  address: {
    streetNumber: '2220',
    streetName: 'N Commerce St',
    city: 'Milwaukee',
    state: 'WI',
    postalCode: '53212',
    country: 'USA',
    latitude: 43.059,
    longitude: -87.905,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
