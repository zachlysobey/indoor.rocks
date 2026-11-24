import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const mosaicBoulders: ClimbingGym = {
  name: 'Mosaic Boulders',
  website: 'https://www.mosaicboulders.com/',
  description: 'Bouldering only.',
  address: {
    streetNumber: '2369',
    streetName: 'Telegraph Ave',
    city: 'Berkeley',
    region: 'CA',
    postalCode: '94704',
    country: 'US',
    latitude: 37.867,
    longitude: -122.259,
  },
  amenities: amenities('bouldering'),
};
