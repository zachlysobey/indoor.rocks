import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { adamanta } from "../companies/adamanta";

export const adamantaSierra: ClimbingGym = {
  name: 'Adamanta Sierra',
  parent: adamanta,
  address: {
    streetNumber: '1000',
    streetName: 'Carr. Nacional km 267',
    city: 'Monterrey',
    region: 'NLE',
    postalCode: '64987',
    country: 'MX',
    latitude: 25.567,
    longitude: -100.247,
  },
  amenities: amenities('bouldering', 'top-rope', 'yoga'),
};
