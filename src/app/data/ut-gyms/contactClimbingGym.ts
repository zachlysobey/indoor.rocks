import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const contactClimbingGym: ClimbingGym = {
  name: 'Contact Climbing Gym',
  website: 'https://www.contactclimbinggym.com/',
  description: 'Climbing, yoga and fitness.',
  address: {
    streetNumber: '2875',
    streetName: 'E 850 N',
    city: 'St. George',
    region: 'UT',
    postalCode: '84790',
    country: 'US',
    latitude: 37.118,
    longitude: -113.521,
  },
  amenities: amenities('bouldering', 'lead', 'yoga'),
};
