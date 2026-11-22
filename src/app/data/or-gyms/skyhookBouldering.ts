import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const skyhookBouldering: ClimbingGym = {
  name: 'Skyhook Bouldering',
  website: 'https://skyhookbouldering.com/',
  description: 'Bouldering only.',
  address: {
    streetNumber: '2436',
    streetName: 'SE 12th Ave',
    city: 'Portland',
    state: 'OR',
    postalCode: '97214',
    country: 'USA',
    latitude: 45.504,
    longitude: -122.654,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines'),
};
