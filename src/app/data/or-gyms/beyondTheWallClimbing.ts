import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const beyondTheWallClimbing: ClimbingGym = {
  name: 'Beyond the Wall Climbing',
  website: 'http://www.beyondthewallclimbing.com/',
  description: 'Bouldering and training boards.',
  address: {
    streetNumber: '1001',
    streetName: 'SE Tualatin Valley Hwy',
    city: 'Hillsboro',
    state: 'OR',
    postalCode: '97123',
    country: 'USA',
    latitude: 45.514,
    longitude: -122.977,
  },
  amenities: amenities('bouldering'),
};
