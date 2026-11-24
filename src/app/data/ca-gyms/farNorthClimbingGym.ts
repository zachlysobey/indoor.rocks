import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const farNorthClimbingGym: ClimbingGym = {
  name: 'Far North Climbing Gym',
  website: 'https://climbfarnorth.com/',
  description: 'Bouldering only.',
  address: {
    streetNumber: '1065',
    streetName: 'K St',
    city: 'Arcata',
    region: 'CA',
    postalCode: '95521',
    country: 'US',
    latitude: 40.871,
    longitude: -124.082,
  },
  amenities: amenities('bouldering', 'free-weights'),
};
