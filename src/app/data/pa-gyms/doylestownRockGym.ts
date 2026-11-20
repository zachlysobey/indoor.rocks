import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const doylestownRockGym: ClimbingGym = {
  name: 'Doylestown Rock Gym',
  website: 'https://www.doylestownrockgym.com/',
  address: {
    streetNumber: '3853',
    streetName: 'Old Easton Rd',
    city: 'Doylestown',
    state: 'PA',
    postalCode: '18902',
    country: 'USA',
    latitude: 40.333,
    longitude: -75.121,
  },
  amenities: amenities('bouldering', 'lead'),
};
