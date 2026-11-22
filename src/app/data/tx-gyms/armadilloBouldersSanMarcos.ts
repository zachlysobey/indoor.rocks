import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { armadilloBoulders } from "../companies/armadilloBoulders";

export const armadilloBouldersSanMarcos: ClimbingGym = {
  name: 'Armadillo Boulders San Marcos',
  website: 'https://joe-kreidel-6ltk.squarespace.com/faq',
  description: 'Bouldering only.',
  parent: armadilloBoulders,
  address: {
    streetNumber: '211',
    streetName: 'S Stagecoach Trl',
    city: 'San Marcos',
    state: 'TX',
    postalCode: '78666',
    country: 'USA',
    latitude: 29.872,
    longitude: -97.958,
  },
  amenities: amenities('bouldering', 'yoga'),
};
