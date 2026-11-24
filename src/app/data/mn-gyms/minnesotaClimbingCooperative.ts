import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const minnesotaClimbingCooperative: ClimbingGym = {
  name: 'Minnesota Climbing Cooperative',
  website: 'https://www.mnclimbingcoop.com',
  description: 'A volunteer-run, member-owned bouldering co-op.',
  address: {
    streetNumber: '1620',
    streetName: 'Central Ave NE',
    city: 'Minneapolis',
    region: 'MN',
    postalCode: '55413',
    country: 'US',
    latitude: 45.005,
    longitude: -93.247,
  },
  amenities: amenities('bouldering'),
};
