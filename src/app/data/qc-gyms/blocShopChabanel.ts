import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { blocShop } from "../companies/blocShop";

export const blocShopChabanel: ClimbingGym = {
  name: 'Bloc Shop Chabanel',
  description: 'Bouldering, with a training area and café.',
  parent: blocShop,
  address: {
    streetNumber: '1370',
    streetName: 'Rue Chabanel O',
    city: 'Montréal',
    region: 'QC',
    postalCode: 'H4N 1H4',
    country: 'CA',
    latitude: 45.532,
    longitude: -73.657,
  },
  amenities: amenities('bouldering'),
};
