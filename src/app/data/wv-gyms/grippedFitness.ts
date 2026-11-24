import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const grippedFitness: ClimbingGym = {
  name: 'Gripped Fitness',
  website: 'https://www.grippedfitness.com',
  description: 'Bouldering, plus pickleball.',
  address: {
    streetNumber: '216',
    streetName: 'Hinkle Rd',
    city: 'Fayetteville',
    region: 'WV',
    postalCode: '25840',
    country: 'US',
    latitude: 38.040,
    longitude: -81.110,
  },
  amenities: amenities('bouldering'),
};
