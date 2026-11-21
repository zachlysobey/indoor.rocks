import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const energyRockGym: ClimbingGym = {
  name: 'eNeRGy Rock Gym',
  description: 'Members-only bouldering; guest day passes by appointment.',
  address: {
    streetNumber: '269',
    streetName: 'Graham Dr',
    city: 'Charleston',
    state: 'WV',
    postalCode: '25302',
    country: 'USA',
    latitude: 38.388,
    longitude: -81.648,
  },
  amenities: amenities('bouldering'),
};
