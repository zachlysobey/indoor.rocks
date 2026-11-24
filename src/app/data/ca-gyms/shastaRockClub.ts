import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const shastaRockClub: ClimbingGym = {
  name: 'Shasta Rock Club',
  website: 'https://www.shastarockclub.com/',
  description: 'Bouldering gym with 24/7 member access.',
  address: {
    streetNumber: '2325',
    streetName: 'Athens Ave',
    city: 'Redding',
    region: 'CA',
    postalCode: '96001',
    country: 'US',
    latitude: 40.578,
    longitude: -122.402,
  },
  amenities: amenities('bouldering'),
};
