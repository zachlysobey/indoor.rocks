import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { philadelphiaRockGyms } from "../companies/philadelphiaRockGyms";

export const philadelphiaRockGymsOaks: ClimbingGym = {
  name: 'Philadelphia Rock Gyms Oaks',
  website: 'https://philarockgym.com/prg-oaks',
  parent: philadelphiaRockGyms,
  address: {
    streetNumber: '122',
    streetName: 'Mill Rd',
    city: 'Oaks',
    region: 'PA',
    postalCode: '19456',
    country: 'US',
    latitude: 40.132,
    longitude: -75.450,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
