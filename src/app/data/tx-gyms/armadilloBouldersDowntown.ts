import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { armadilloBoulders } from "../companies/armadilloBoulders";

export const armadilloBouldersDowntown: ClimbingGym = {
  name: 'Armadillo Boulders Downtown',
  website: 'https://joe-kreidel-6ltk.squarespace.com/faq',
  description: 'Bouldering only.',
  parent: armadilloBoulders,
  address: {
    streetNumber: '1119',
    streetName: 'Camden St',
    city: 'San Antonio',
    state: 'TX',
    postalCode: '78215',
    country: 'USA',
    latitude: 29.438,
    longitude: -98.488,
  },
  amenities: amenities('bouldering', 'yoga'),
};
