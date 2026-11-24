import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theBoulderField: ClimbingGym = {
  name: 'The Boulder Field',
  website: 'https://www.theboulderfield.com/',
  description: 'Bouldering gym.',
  address: {
    streetNumber: '8425',
    streetName: 'Belvedere Ave',
    city: 'Sacramento',
    region: 'CA',
    postalCode: '95826',
    country: 'US',
    latitude: 38.540,
    longitude: -121.390,
  },
  amenities: amenities('bouldering', 'yoga'),
};
