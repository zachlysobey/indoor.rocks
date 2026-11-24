import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const tiltedClimbing: ClimbingGym = {
  name: 'Tilted Climbing & Fitness',
  website: 'https://tiltedclimbing.ca',
  description: 'A board gym: Kilter Boards and a spray wall. Members have 24/7 access.',
  address: {
    streetNumber: '1477',
    streetName: 'Charlotte Rd',
    city: 'North Vancouver',
    state: 'BC',
    postalCode: 'V7J 1H1',
    country: 'Canada',
    latitude: 49.315,
    longitude: -123.026,
  },
  amenities: amenities('bouldering'),
};
