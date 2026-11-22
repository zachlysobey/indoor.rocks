import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theCampusClimbingAndTraining: ClimbingGym = {
  name: 'The Campus Climbing and Training',
  website: 'https://www.thecampusclimbingandtraining.com/',
  description: 'Bouldering and training-board gym.',
  address: {
    streetNumber: '4699',
    streetName: 'Nautilus Ct S',
    city: 'Boulder',
    state: 'CO',
    postalCode: '80301',
    country: 'USA',
    latitude: 40.060,
    longitude: -105.208,
  },
  amenities: amenities('bouldering', 'free-weights'),
};
