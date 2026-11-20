import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { philadelphiaRockGyms } from "../companies/philadelphiaRockGyms";

export const philadelphiaRockGymsWyncote: ClimbingGym = {
  name: 'Philadelphia Rock Gyms Wyncote',
  website: 'https://philarockgym.com/prg-wyncote',
  parent: philadelphiaRockGyms,
  address: {
    streetNumber: '827',
    streetName: 'Glenside Ave',
    city: 'Wyncote',
    state: 'PA',
    postalCode: '19095',
    country: 'USA',
    latitude: 40.090,
    longitude: -75.148,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
