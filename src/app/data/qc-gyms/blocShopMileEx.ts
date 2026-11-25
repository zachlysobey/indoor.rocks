import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { blocShop } from "../companies/blocShop";

export const blocShopMileEx: ClimbingGym = {
  name: 'Bloc Shop Mile-Ex',
  description: 'Bouldering, with a training room.',
  parent: blocShop,
  address: {
    streetNumber: '6595A',
    streetName: 'Rue Saint-Urbain',
    city: 'Montréal',
    region: 'QC',
    postalCode: 'H2S 3G6',
    country: 'CA',
    latitude: 45.530,
    longitude: -73.612,
  },
  amenities: amenities('bouldering'),
};
