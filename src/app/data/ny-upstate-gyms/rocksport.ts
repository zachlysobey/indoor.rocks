import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rocksport: ClimbingGym = {
  name: 'Rocksport',
  website: 'https://rocksportny.com/',
  description: 'Climbing since 1992; also runs an Adirondack guide service.',
  address: {
    streetNumber: '54',
    streetName: 'Carey Rd',
    city: 'Queensbury',
    region: 'NY',
    postalCode: '12804',
    country: 'US',
    latitude: 43.322,
    longitude: -73.672,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
