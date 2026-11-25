import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const zeroGravite: ClimbingGym = {
  name: 'Zéro Gravité',
  description: 'Climbing and yoga.',
  address: {
    streetNumber: '4519',
    streetName: 'Av Papineau',
    city: 'Montréal',
    region: 'QC',
    postalCode: 'H2H 1V4',
    country: 'CA',
    latitude: 45.534,
    longitude: -73.577,
  },
  amenities: amenities('top-rope', 'lead', 'bouldering', 'yoga'),
};
