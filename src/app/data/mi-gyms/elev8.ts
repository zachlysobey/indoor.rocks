import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const elev8: ClimbingGym = {
  name: 'ELEV8 Climbing and Fitness',
  website: 'https://www.elev8climbing.com',
  address: {
    streetNumber: '777',
    streetName: 'Boyd Ave',
    city: 'Traverse City',
    state: 'MI',
    postalCode: '49686',
    country: 'USA',
    latitude: 44.762,
    longitude: -85.610,
  },
  amenities: amenities('bouldering', 'top-rope', 'yoga', 'arial-silks'),
};
