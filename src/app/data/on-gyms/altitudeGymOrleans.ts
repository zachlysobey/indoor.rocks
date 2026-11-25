import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { altitudeGym } from "../companies/altitudeGym";

export const altitudeGymOrleans: ClimbingGym = {
  name: 'Altitude Gym Orléans',
  parent: altitudeGym,
  address: {
    streetNumber: '265',
    streetName: 'Centrum Blvd',
    city: 'Orléans',
    region: 'ON',
    postalCode: 'K1E',
    country: 'CA',
    latitude: 45.479,
    longitude: -75.513,
  },
  amenities: amenities('bouldering'),
};
