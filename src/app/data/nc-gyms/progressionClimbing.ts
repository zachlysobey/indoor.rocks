import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const progressionClimbing: ClimbingGym = {
  name: 'Progression Climbing',
  website: 'https://climbprogression.com',
  description: 'Bouldering only.',
  address: {
    streetNumber: '1713',
    streetName: 'Legion Rd',
    city: 'Chapel Hill',
    region: 'NC',
    postalCode: '27517',
    country: 'US',
    latitude: 35.930,
    longitude: -79.027,
  },
  amenities: amenities('bouldering'),
};
