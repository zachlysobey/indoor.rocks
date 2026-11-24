import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theBouldersSaanichton: ClimbingGym = {
  name: 'The Boulders Saanichton',
  website: 'https://climbtheboulders.ca',
  description: 'Nonprofit, with a competition speed wall.',
  address: {
    streetNumber: '1627',
    streetName: 'Stellys Cross Rd',
    city: 'Saanichton',
    region: 'BC',
    postalCode: 'V8M 1S8',
    country: 'CA',
    latitude: 48.576,
    longitude: -123.425,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
