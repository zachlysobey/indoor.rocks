import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { allezUp } from "../companies/allezUp";

export const allezUpVerdun: ClimbingGym = {
  name: 'Allez Up Verdun',
  description: 'Bouldering, with a training area and café.',
  parent: allezUp,
  address: {
    streetNumber: '4137',
    streetName: 'Boul LaSalle',
    city: 'Montréal',
    region: 'QC',
    postalCode: 'H4G 0A9',
    country: 'CA',
    latitude: 45.462,
    longitude: -73.564,
  },
  amenities: amenities('bouldering'),
};
