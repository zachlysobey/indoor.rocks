import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const vPlusBouldering: ClimbingGym = {
  name: 'V+ Bouldering & Sport Center',
  address: {
    streetNumber: '485',
    streetName: 'Av. Miguel Othón de Mendizábal Ote.',
    city: 'Ciudad de México',
    region: 'CMX',
    postalCode: '07700',
    country: 'MX',
    latitude: 19.494,
    longitude: -99.143,
  },
  amenities: amenities('bouldering', 'aerial-silks'),
};
