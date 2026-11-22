import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const bigIslandClimbing: ClimbingGym = {
  name: 'Big Island Climbing',
  description: 'Bouldering only.',
  address: {
    streetNumber: '126',
    streetName: 'Keawe St',
    city: 'Hilo',
    state: 'HI',
    postalCode: '96720',
    country: 'USA',
    latitude: 19.724,
    longitude: -155.087,
  },
  amenities: amenities('bouldering'),
};
