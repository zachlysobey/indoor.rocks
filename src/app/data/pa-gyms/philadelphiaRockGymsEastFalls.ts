import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { philadelphiaRockGyms } from "../companies/philadelphiaRockGyms";

export const philadelphiaRockGymsEastFalls: ClimbingGym = {
  name: 'Philadelphia Rock Gyms East Falls',
  website: 'https://philarockgym.com/prg-east-falls',
  parent: philadelphiaRockGyms,
  address: {
    streetNumber: '3500',
    streetName: 'Scotts Ln',
    city: 'Philadelphia',
    region: 'PA',
    postalCode: '19129',
    country: 'US',
    latitude: 40.009,
    longitude: -75.183,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
