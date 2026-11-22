import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { thePad } from "../companies/thePad";

export const thePadSantaBarbara: ClimbingGym = {
  name: 'The Pad Santa Barbara',
  website: 'https://thepadclimbing.org/santa-barbara/',
  parent: thePad,
  address: {
    streetNumber: '5160',
    streetName: 'Hollister Ave',
    city: 'Goleta',
    state: 'CA',
    postalCode: '93111',
    country: 'USA',
    latitude: 34.437,
    longitude: -119.793,
  },
  amenities: amenities('bouldering', 'auto-belays', 'free-weights', 'machines'),
};
