import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const ironCityBoulders: ClimbingGym = {
  name: 'Iron City Boulders',
  website: 'https://ironcityboulders.com/',
  address: {
    streetNumber: '143',
    streetName: '51st St',
    city: 'Pittsburgh',
    state: 'PA',
    postalCode: '15201',
    country: 'USA',
    latitude: 40.481,
    longitude: -79.959,
  },
  amenities: amenities('bouldering', 'yoga'),
};
