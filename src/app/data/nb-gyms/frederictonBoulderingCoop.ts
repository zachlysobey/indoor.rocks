import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const frederictonBoulderingCoop: ClimbingGym = {
  name: 'Fredericton Bouldering Co-op',
  website: 'https://www.fbcwall.com',
  description: 'A member-owned bouldering co-op.',
  address: {
    streetNumber: '528',
    streetName: 'Smythe St, Unit 3',
    city: 'Fredericton',
    region: 'NB',
    postalCode: 'E3B 3E6',
    country: 'CA',
    latitude: 45.955,
    longitude: -66.649,
  },
  amenities: amenities('bouldering', 'yoga'),
};
