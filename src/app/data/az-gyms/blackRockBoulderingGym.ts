import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const blackRockBoulderingGym: ClimbingGym = {
  name: 'Black Rock Bouldering Gym',
  website: 'https://www.blackrockboulderinggym.com/',
  description: 'Bouldering only.',
  address: {
    streetNumber: '10436',
    streetName: 'N 32nd St',
    city: 'Phoenix',
    state: 'AZ',
    postalCode: '85028',
    country: 'USA',
    latitude: 33.583,
    longitude: -112.012,
  },
  amenities: amenities('bouldering', 'yoga', 'free-weights'),
};
