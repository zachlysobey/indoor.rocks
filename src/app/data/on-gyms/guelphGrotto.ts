import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const guelphGrotto: ClimbingGym = {
  name: 'Guelph Grotto',
  website: 'https://guelphgrotto.com',
  description: 'Open since 1994.',
  address: {
    streetNumber: '199',
    streetName: 'Victoria Rd S',
    city: 'Guelph',
    region: 'ON',
    postalCode: 'N1E 6T9',
    country: 'CA',
    latitude: 43.548,
    longitude: -80.231,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga', 'aerial-silks'),
};
