import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { projectRock } from "../companies/projectRock";

export const projectRockOaklandPark: ClimbingGym = {
  name: 'projectROCK Oakland Park',
  website: 'https://projectrock.com',
  description: 'Rock-realistic walls.',
  parent: projectRock,
  address: {
    streetNumber: '3580',
    streetName: 'N Andrews Ave',
    city: 'Oakland Park',
    region: 'FL',
    postalCode: '33309',
    country: 'US',
    latitude: 26.172,
    longitude: -80.145,
  },
  amenities: amenities('bouldering', 'lead', 'yoga'),
};
