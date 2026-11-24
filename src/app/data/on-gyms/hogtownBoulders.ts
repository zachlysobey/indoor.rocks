import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const hogtownBoulders: ClimbingGym = {
  name: 'Hogtown Boulders',
  description: 'Bouldering only.',
  address: {
    streetNumber: '238',
    streetName: 'Lesmill Rd',
    city: 'Toronto',
    region: 'ON',
    postalCode: 'M3B 2T5',
    country: 'CA',
    latitude: 43.757,
    longitude: -79.358,
  },
  amenities: amenities('bouldering'),
};
