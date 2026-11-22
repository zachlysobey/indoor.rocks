import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { momentum } from "../companies/momentum";

export const momentumSilverStreet: ClimbingGym = {
  name: 'Momentum Silver Street',
  website: 'https://momentumclimbing.com/silver-street/',
  description: 'Bouldering only.',
  parent: momentum,
  address: {
    streetNumber: '1401',
    streetName: 'Silver St',
    city: 'Houston',
    state: 'TX',
    postalCode: '77007',
    country: 'USA',
    latitude: 29.767,
    longitude: -95.376,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines', 'yoga'),
};
