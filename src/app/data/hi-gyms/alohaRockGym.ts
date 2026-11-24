import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const alohaRockGym: ClimbingGym = {
  name: 'Aloha Rock Gym',
  website: 'https://www.aloharockgym.com',
  address: {
    streetNumber: '72',
    streetName: 'Lauo Loop',
    city: 'Kahului',
    region: 'HI',
    postalCode: '96732',
    country: 'US',
    latitude: 20.882,
    longitude: -156.457,
  },
  amenities: amenities('bouldering', 'lead', 'free-weights', 'machines'),
};
