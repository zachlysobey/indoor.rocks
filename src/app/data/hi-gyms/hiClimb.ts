import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const hiClimb: ClimbingGym = {
  name: 'HiClimb',
  website: 'https://hawaiiclimb.com',
  address: {
    streetNumber: '825',
    streetName: 'Ilaniwai St',
    city: 'Honolulu',
    region: 'HI',
    postalCode: '96813',
    country: 'US',
    latitude: 21.299,
    longitude: -157.858,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'machines', 'yoga'),
};
