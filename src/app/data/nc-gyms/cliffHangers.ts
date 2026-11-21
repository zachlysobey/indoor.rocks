import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const cliffHangers: ClimbingGym = {
  name: 'Cliff Hangers Climbing and Fitness',
  website: 'https://cliffhangersclimbing.com',
  address: {
    streetNumber: '326',
    streetName: 'Oates Rd',
    city: 'Mooresville',
    state: 'NC',
    postalCode: '28117',
    country: 'USA',
    latitude: 35.583,
    longitude: -80.853,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'yoga'),
};
