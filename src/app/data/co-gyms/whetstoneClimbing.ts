import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const whetstoneClimbing: ClimbingGym = {
  name: 'Whetstone Climbing',
  website: 'https://whetstoneclimbing.com/',
  address: {
    streetNumber: '220',
    streetName: 'Smokey St',
    city: 'Fort Collins',
    state: 'CO',
    postalCode: '80525',
    country: 'USA',
    latitude: 40.548,
    longitude: -105.038,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines', 'yoga'),
};
