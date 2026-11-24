import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const hiLineClimbingCenter: ClimbingGym = {
  name: 'The Hi-Line Climbing Center',
  website: 'https://hilineclimbingcenter.com',
  address: {
    streetNumber: '608',
    streetName: '1st Ave S',
    city: 'Great Falls',
    region: 'MT',
    postalCode: '59401',
    country: 'US',
    latitude: 47.502,
    longitude: -111.296,
  },
  amenities: amenities('bouldering'),
};
