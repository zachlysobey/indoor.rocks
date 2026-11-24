import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { armadilloBoulders } from "../companies/armadilloBoulders";

export const armadilloBouldersStoneOak: ClimbingGym = {
  name: 'Armadillo Boulders Stone Oak',
  website: 'https://joe-kreidel-6ltk.squarespace.com/faq',
  description: 'Bouldering only.',
  parent: armadilloBoulders,
  address: {
    streetNumber: '23132',
    streetName: 'US-281',
    city: 'San Antonio',
    region: 'TX',
    postalCode: '78258',
    country: 'US',
    latitude: 29.646,
    longitude: -98.454,
  },
  amenities: amenities('bouldering', 'yoga'),
};
