import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rockOnClimbing: ClimbingGym = {
  name: 'Rock On Climbing',
  website: 'https://rockonclimbing.ca',
  description: 'Bouldering only. Members have 24/7 access.',
  address: {
    streetNumber: '474',
    streetName: 'Front St E, Unit 4',
    city: 'Toronto',
    region: 'ON',
    postalCode: 'M5A 0E6',
    country: 'CA',
    latitude: 43.653,
    longitude: -79.356,
  },
  amenities: amenities('bouldering'),
};
