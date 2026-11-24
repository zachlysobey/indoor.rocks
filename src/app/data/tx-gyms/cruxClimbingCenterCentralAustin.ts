import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { crux } from "../companies/crux";

export const cruxClimbingCenterCentralAustin: ClimbingGym = {
  name: 'Crux Climbing Center Central Austin',
  website: 'https://www.cruxclimbingcenter.com/central-austin/',
  description: 'Bouldering gym.',
  parent: crux,
  address: {
    streetNumber: '6015',
    streetName: 'Dillard Cir',
    city: 'Austin',
    region: 'TX',
    postalCode: '78752',
    country: 'US',
    latitude: 30.329,
    longitude: -97.716,
  },
  amenities: amenities('bouldering', 'yoga', 'sauna'),
};
