import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const frontierClimbing: ClimbingGym = {
  name: 'Frontier Climbing and Fitness',
  address: {
    streetNumber: '5045',
    streetName: 'E Grant St',
    city: 'Sioux Falls',
    state: 'SD',
    postalCode: '57110',
    country: 'USA',
    latitude: 43.555,
    longitude: -96.661,
  },
  amenities: amenities('bouldering', 'top-rope'),
};
