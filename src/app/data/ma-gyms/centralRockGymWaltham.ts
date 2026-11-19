import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { centralRockGym } from "../companies/centralRockGym";

export const centralRockGymWaltham: ClimbingGym = {
  name: 'Central Rock Gym Waltham',
  website: 'https://centralrockgym.com/waltham/',
  description: 'Bouldering; also home to CRG\'s team training facility.',
  parent: centralRockGym,
  address: {
    streetNumber: '411',
    streetName: 'Waverley Oaks Rd',
    city: 'Waltham',
    state: 'MA',
    postalCode: '02452',
    country: 'USA',
    latitude: 42.388,
    longitude: -71.203,
  },
  amenities: amenities('bouldering', 'yoga'),
};
