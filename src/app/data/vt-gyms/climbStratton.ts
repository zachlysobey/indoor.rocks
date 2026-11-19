import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const climbStratton: ClimbingGym = {
  name: 'CLIMB Stratton Rocks and Boulders',
  website: 'https://www.stratton.com/things-to-do/activities/climb',
  description: 'In the village at Stratton Mountain Resort.',
  address: {
    streetNumber: '8C',
    streetName: 'Village Lodge Rd',
    city: 'Stratton',
    state: 'VT',
    postalCode: '05155',
    country: 'USA',
    latitude: 43.113,
    longitude: -72.906,
  },
  amenities: amenities('bouldering', 'auto-belays'),
};
