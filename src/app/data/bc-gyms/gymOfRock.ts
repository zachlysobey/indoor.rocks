import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const gymOfRock: ClimbingGym = {
  name: 'Gym of Rock',
  website: 'https://gymofrock.com',
  address: {
    streetNumber: '2090',
    streetName: '10 Ave SW, Unit 111',
    city: 'Salmon Arm',
    state: 'BC',
    postalCode: 'V1E 0E1',
    country: 'Canada',
    latitude: 50.692,
    longitude: -119.310,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays'),
};
