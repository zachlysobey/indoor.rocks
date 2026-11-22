import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const apeIndexRockClimbingGym: ClimbingGym = {
  name: 'Ape Index Rock Climbing Gym',
  website: 'https://climbapeindex.com/',
  address: {
    streetNumber: '9700',
    streetName: 'N 91st Ave',
    city: 'Peoria',
    state: 'AZ',
    postalCode: '85345',
    country: 'USA',
    latitude: 33.575,
    longitude: -112.252,
  },
  amenities: amenities('bouldering', 'top-rope', 'yoga'),
};
