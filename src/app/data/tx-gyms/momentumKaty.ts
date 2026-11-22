import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { momentum } from "../companies/momentum";

export const momentumKaty: ClimbingGym = {
  name: 'Momentum Katy',
  website: 'https://momentumclimbing.com/katy/',
  parent: momentum,
  address: {
    streetNumber: '25410',
    streetName: 'Katy Mills Pkwy',
    city: 'Katy',
    state: 'TX',
    postalCode: '77494',
    country: 'USA',
    latitude: 29.776,
    longitude: -95.810,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights', 'yoga'),
};
