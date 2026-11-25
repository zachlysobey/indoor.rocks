import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { allezUp } from "../companies/allezUp";

export const allezUpPointeSaintCharles: ClimbingGym = {
  name: 'Allez Up Pointe-Saint-Charles',
  description: 'Rope climbing, including an outdoor silo.',
  parent: allezUp,
  address: {
    streetNumber: '1555',
    streetName: 'Rue Saint-Patrick',
    city: 'Montréal',
    region: 'QC',
    postalCode: 'H3K 2B7',
    country: 'CA',
    latitude: 45.484,
    longitude: -73.562,
  },
  amenities: amenities('top-rope', 'lead', 'bouldering', 'free-weights'),
};
