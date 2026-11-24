import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const overhang: ClimbingGym = {
  name: 'OVERhang',
  website: 'https://overhang.ca',
  address: {
    streetNumber: '2601',
    streetName: 'Recplace Dr',
    city: 'Prince George',
    region: 'BC',
    postalCode: 'V2N',
    country: 'CA',
    latitude: 53.905,
    longitude: -122.791,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
