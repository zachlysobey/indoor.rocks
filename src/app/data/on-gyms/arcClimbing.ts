import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const arcClimbing: ClimbingGym = {
  name: 'ARC Climbing & Yoga Fitness',
  website: 'https://arcclimbing.ca',
  address: {
    streetNumber: '1981',
    streetName: 'Old Burwash Rd',
    city: 'Sudbury',
    region: 'ON',
    postalCode: 'P3E 4Z3',
    country: 'CA',
    latitude: 46.452,
    longitude: -80.968,
  },
  amenities: amenities('bouldering', 'yoga'),
};
