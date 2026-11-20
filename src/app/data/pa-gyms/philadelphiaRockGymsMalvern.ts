import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { philadelphiaRockGyms } from "../companies/philadelphiaRockGyms";

export const philadelphiaRockGymsMalvern: ClimbingGym = {
  name: 'Philadelphia Rock Gyms Malvern',
  website: 'https://philarockgym.com/prg-malvern',
  parent: philadelphiaRockGyms,
  address: {
    streetNumber: '57',
    streetName: 'Lancaster Ave',
    city: 'Malvern',
    state: 'PA',
    postalCode: '19355',
    country: 'USA',
    latitude: 40.038,
    longitude: -75.511,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
