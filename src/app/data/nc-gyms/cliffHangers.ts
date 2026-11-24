import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const cliffHangers: ClimbingGym = {
  name: 'Cliff Hangers Climbing and Fitness',
  website: 'https://cliffhangersclimbing.com',
  address: {
    streetNumber: '326',
    streetName: 'Oates Rd',
    city: 'Mooresville',
    region: 'NC',
    postalCode: '28117',
    country: 'US',
    latitude: 35.583,
    longitude: -80.853,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'yoga'),
};
