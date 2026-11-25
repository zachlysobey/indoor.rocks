import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const monolithe: ClimbingGym = {
  name: 'Monolithe',
  website: 'https://www.escalademonolithe.com',
  description: 'Opened in December 2025, in part of the former Horizon Roc.',
  address: {
    streetNumber: '2350',
    streetName: 'Rue Dickson, Local 100',
    city: 'Montréal',
    region: 'QC',
    postalCode: 'H1N 3T1',
    country: 'CA',
    latitude: 45.569,
    longitude: -73.536,
  },
  amenities: amenities('top-rope', 'lead', 'auto-belays', 'bouldering'),
};
