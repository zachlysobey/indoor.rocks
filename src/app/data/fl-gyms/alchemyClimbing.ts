import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const alchemyClimbing: ClimbingGym = {
  name: 'Alchemy Climbing',
  description: 'In a former movie theater. Formerly Tallahassee Rock Gym.',
  address: {
    streetNumber: '2810',
    streetName: 'Sharer Rd',
    city: 'Tallahassee',
    region: 'FL',
    postalCode: '32312',
    country: 'US',
    latitude: 30.475,
    longitude: -84.255,
  },
  amenities: amenities('bouldering', 'top-rope', 'yoga'),
};
