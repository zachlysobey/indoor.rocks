import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const climbNora: ClimbingGym = {
  name: 'Climb NORA',
  website: 'https://www.climbnora.com/',
  description: 'Bouldering gym with Kilter and Tension boards.',
  address: {
    streetNumber: '30820',
    streetName: 'Pacific Hwy S',
    city: 'Federal Way',
    region: 'WA',
    postalCode: '98003',
    country: 'US',
    latitude: 47.326,
    longitude: -122.312,
  },
  amenities: amenities('bouldering'),
};
