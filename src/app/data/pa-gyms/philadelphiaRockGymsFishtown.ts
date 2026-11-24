import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { philadelphiaRockGyms } from "../companies/philadelphiaRockGyms";

export const philadelphiaRockGymsFishtown: ClimbingGym = {
  name: 'Philadelphia Rock Gyms Fishtown',
  website: 'https://philarockgym.com/prg-fishtown',
  parent: philadelphiaRockGyms,
  address: {
    streetNumber: '2412',
    streetName: 'E York St',
    city: 'Philadelphia',
    region: 'PA',
    postalCode: '19125',
    country: 'US',
    latitude: 39.979,
    longitude: -75.124,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
