import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theQuarry: ClimbingGym = {
  name: 'The Quarry',
  website: 'https://www.quarryclimbing.com/',
  address: {
    streetNumber: '2494',
    streetName: 'N University Pkwy',
    city: 'Provo',
    state: 'UT',
    postalCode: '84604',
    country: 'USA',
    latitude: 40.264,
    longitude: -111.668,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'yoga'),
};
