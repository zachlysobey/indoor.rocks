import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const ironCityBoulders: ClimbingGym = {
  name: 'Iron City Boulders',
  website: 'https://ironcityboulders.com/',
  address: {
    streetNumber: '143',
    streetName: '51st St',
    city: 'Pittsburgh',
    region: 'PA',
    postalCode: '15201',
    country: 'US',
    latitude: 40.481,
    longitude: -79.959,
  },
  amenities: amenities('bouldering', 'yoga'),
};
