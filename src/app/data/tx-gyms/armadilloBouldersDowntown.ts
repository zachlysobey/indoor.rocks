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
    region: 'TX',
    postalCode: '78215',
    country: 'US',
    latitude: 29.438,
    longitude: -98.488,
  },
  amenities: amenities('bouldering', 'yoga'),
};
