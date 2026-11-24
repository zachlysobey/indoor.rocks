import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theOverlook: ClimbingGym = {
  name: 'The Overlook Boulder + Fitness',
  website: 'https://overlookclimbing.com',
  description: 'Bouldering only. On the Westside BeltLine Trail.',
  address: {
    streetNumber: '1030',
    streetName: 'White St SW',
    city: 'Atlanta',
    region: 'GA',
    postalCode: '30310',
    country: 'US',
    latitude: 33.734,
    longitude: -84.423,
  },
  amenities: amenities('bouldering', 'free-weights'),
};
