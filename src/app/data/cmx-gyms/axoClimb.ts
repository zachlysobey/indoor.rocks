import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const axoClimb: ClimbingGym = {
  name: 'Axo Climb',
  address: {
    streetNumber: '71',
    streetName: 'Redención',
    city: 'Ciudad de México',
    region: 'CMX',
    postalCode: '16050',
    country: 'MX',
    latitude: 19.270,
    longitude: -99.115,
  },
  amenities: amenities('bouldering', 'yoga', 'aerial-silks'),
};
