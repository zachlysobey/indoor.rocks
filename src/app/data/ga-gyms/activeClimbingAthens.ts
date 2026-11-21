import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { activeClimbing } from "../companies/activeClimbing";

export const activeClimbingAthens: ClimbingGym = {
  name: 'Active Climbing Athens',
  description: 'Bouldering only.',
  parent: activeClimbing,
  address: {
    streetNumber: '665',
    streetName: 'Barber St',
    city: 'Athens',
    state: 'GA',
    postalCode: '30601',
    country: 'USA',
    latitude: 33.969,
    longitude: -83.390,
  },
  amenities: amenities('bouldering'),
};
