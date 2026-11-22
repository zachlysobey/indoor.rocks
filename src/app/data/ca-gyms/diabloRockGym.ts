import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { touchstone } from "../companies/touchstone";

export const diabloRockGym: ClimbingGym = {
  name: 'Diablo Rock Gym',
  website: 'https://touchstoneclimbing.com/diablorock/',
  parent: touchstone,
  address: {
    streetNumber: '1220',
    streetName: 'Diamond Way',
    city: 'Concord',
    state: 'CA',
    postalCode: '94520',
    country: 'USA',
    latitude: 37.975,
    longitude: -122.052,
  },
  amenities: amenities('bouldering', 'lead', 'yoga'),
};
