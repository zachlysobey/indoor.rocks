import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theCoreClimbingGym: ClimbingGym = {
  name: 'The Core Climbing Gym',
  website: 'https://thecoreclimbing.ca',
  address: {
    streetNumber: '500',
    streetName: 'Jamieson Pkwy, Unit 1',
    city: 'Cambridge',
    region: 'ON',
    postalCode: 'N3C 0G5',
    country: 'CA',
    latitude: 43.413,
    longitude: -80.297,
  },
  amenities: amenities('bouldering', 'yoga'),
};
