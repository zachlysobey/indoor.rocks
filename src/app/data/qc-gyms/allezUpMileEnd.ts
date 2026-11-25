import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { allezUp } from "../companies/allezUp";

export const allezUpMileEnd: ClimbingGym = {
  name: 'Allez Up Mile End',
  parent: allezUp,
  address: {
    streetNumber: '5600',
    streetName: 'Av de Gaspé',
    city: 'Montréal',
    region: 'QC',
    postalCode: 'H2T 2A7',
    country: 'CA',
    latitude: 45.528,
    longitude: -73.598,
  },
  amenities: amenities(),
};
