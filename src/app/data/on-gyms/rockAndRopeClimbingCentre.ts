import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rockAndRopeClimbingCentre: ClimbingGym = {
  name: 'Rock & Rope Climbing Centre',
  website: 'https://rockandrope.com',
  address: {
    streetNumber: '280',
    streetName: 'Perry St, Unit 16',
    city: 'Peterborough',
    region: 'ON',
    postalCode: 'K9J 2J4',
    country: 'CA',
    latitude: 44.298,
    longitude: -78.330,
  },
  amenities: amenities(),
};
