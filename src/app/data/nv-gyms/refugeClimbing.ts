import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const refugeClimbing: ClimbingGym = {
  name: 'The Refuge Climbing and Fitness',
  website: 'https://www.refugeclimbing.com',
  description: 'Bouldering-focused.',
  address: {
    streetNumber: '6283',
    streetName: 'S Valley View Blvd',
    city: 'Las Vegas',
    state: 'NV',
    postalCode: '89118',
    country: 'USA',
    latitude: 36.075,
    longitude: -115.190,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines'),
};
