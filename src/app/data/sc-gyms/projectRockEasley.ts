import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { projectRock } from "../companies/projectRock";

export const projectRockEasley: ClimbingGym = {
  name: 'projectROCK Easley',
  description: 'Rock-realistic walls up to 84 feet tall.',
  parent: projectRock,
  address: {
    streetNumber: '2121',
    streetName: 'Farrs Bridge Rd',
    city: 'Easley',
    region: 'SC',
    postalCode: '29640',
    country: 'US',
    latitude: 34.850,
    longitude: -82.530,
  },
  amenities: amenities('bouldering', 'lead'),
};
