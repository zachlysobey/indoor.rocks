import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const cultivateClimbingFoundy: ClimbingGym = {
  name: 'Cultivate Climbing Foundy',
  website: 'https://cultivateclimbing.com',
  description: 'Bouldering only. Reopened Nov 2025 after Hurricane Helene.',
  address: {
    streetNumber: '37',
    streetName: 'Foundy St',
    city: 'Asheville',
    state: 'NC',
    postalCode: '28801',
    country: 'USA',
    latitude: 35.585,
    longitude: -82.566,
  },
  amenities: amenities('bouldering'),
};
