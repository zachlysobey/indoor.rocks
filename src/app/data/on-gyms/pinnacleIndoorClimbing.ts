import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const pinnacleIndoorClimbing: ClimbingGym = {
  name: 'Pinnacle Indoor Climbing',
  website: 'https://pinnacleindoorclimbing.com',
  description: 'With an Olympic-style speed wall.',
  address: {
    streetNumber: '330',
    streetName: 'Lake Rd',
    city: 'Bowmanville',
    region: 'ON',
    postalCode: 'L1C',
    country: 'CA',
    latitude: 43.888,
    longitude: -78.692,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
