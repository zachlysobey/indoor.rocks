import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const elev8: ClimbingGym = {
  name: 'ELEV8 Climbing and Fitness',
  website: 'https://www.elev8climbing.com',
  address: {
    streetNumber: '777',
    streetName: 'Boyd Ave',
    city: 'Traverse City',
    region: 'MI',
    postalCode: '49686',
    country: 'US',
    latitude: 44.762,
    longitude: -85.610,
  },
  amenities: amenities('bouldering', 'top-rope', 'yoga', 'aerial-silks'),
};
