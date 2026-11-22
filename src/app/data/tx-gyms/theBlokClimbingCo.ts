import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theBlokClimbingCo: ClimbingGym = {
  name: 'The Blok Climbing Co',
  website: 'https://www.theblokclimbing.com/',
  description: 'Bouldering gym with 24/7 member access.',
  address: {
    streetNumber: '5252',
    streetName: 'W Vickery Blvd',
    city: 'Fort Worth',
    state: 'TX',
    postalCode: '76107',
    country: 'USA',
    latitude: 32.727,
    longitude: -97.402,
  },
  amenities: amenities('bouldering', 'free-weights', 'sauna'),
};
