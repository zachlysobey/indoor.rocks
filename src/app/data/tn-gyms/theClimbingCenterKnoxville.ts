import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theClimbingCenterKnoxville: ClimbingGym = {
  name: 'The Climbing Center',
  website: 'https://www.tcc.riversportsoutfitters.com',
  description: 'At River Sports Outfitters.',
  address: {
    streetNumber: '2918',
    streetName: 'Sutherland Ave',
    city: 'Knoxville',
    state: 'TN',
    postalCode: '37919',
    country: 'USA',
    latitude: 35.952,
    longitude: -83.958,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
