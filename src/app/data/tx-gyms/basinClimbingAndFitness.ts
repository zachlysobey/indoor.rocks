import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const basinClimbingAndFitness: ClimbingGym = {
  name: 'Basin Climbing and Fitness',
  website: 'https://basinclimbing.com/',
  address: {
    streetNumber: '650',
    streetName: 'Alliance Pkwy',
    city: 'Hewitt',
    state: 'TX',
    postalCode: '76643',
    country: 'USA',
    latitude: 31.476,
    longitude: -97.200,
  },
  amenities: amenities('bouldering', 'top-rope'),
};
