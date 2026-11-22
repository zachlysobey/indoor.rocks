import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { vital } from "../companies/vital";

export const vitalOceanside: ClimbingGym = {
  name: 'VITAL Oceanside',
  website: 'https://www.vitalclimbinggym.com/california',
  parent: vital,
  address: {
    streetNumber: '525',
    streetName: 'S Coast Hwy',
    city: 'Oceanside',
    state: 'CA',
    postalCode: '92054',
    country: 'USA',
    latitude: 33.190,
    longitude: -117.369,
  },
  amenities: amenities('bouldering', 'yoga', 'free-weights', 'machines'),
};
