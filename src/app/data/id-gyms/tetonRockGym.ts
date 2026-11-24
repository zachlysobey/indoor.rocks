import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const tetonRockGym: ClimbingGym = {
  name: 'Teton Rock Gym',
  website: 'https://www.tetonrockgym.org',
  description: 'Nonprofit.',
  address: {
    streetNumber: '60',
    streetName: 'S Main St, Ste 350',
    city: 'Driggs',
    region: 'ID',
    postalCode: '83422',
    country: 'US',
    latitude: 43.722,
    longitude: -111.111,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
