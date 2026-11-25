import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { aspireClimbing } from "../companies/aspireClimbing";

export const aspireClimbingMilton: ClimbingGym = {
  name: 'Aspire Climbing Milton',
  description: 'Climbing and Ninja Warrior.',
  parent: aspireClimbing,
  address: {
    streetNumber: '270',
    streetName: 'Bronte St N, Unit 2',
    city: 'Milton',
    region: 'ON',
    postalCode: 'L9T',
    country: 'CA',
    latitude: 43.520,
    longitude: -79.896,
  },
  amenities: amenities('bouldering'),
};
