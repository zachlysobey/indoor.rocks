import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const berkshireBoulders: ClimbingGym = {
  name: 'Berkshire Boulders',
  website: 'https://berkshireboulders.com/',
  description: 'Bouldering only. Opened November 2026; gives its profits to climbing access.',
  address: {
    streetNumber: '325',
    streetName: 'Stockbridge Rd',
    city: 'Great Barrington',
    state: 'MA',
    postalCode: '01230',
    country: 'USA',
    latitude: 42.211,
    longitude: -73.346,
  },
  amenities: amenities('bouldering'),
};
