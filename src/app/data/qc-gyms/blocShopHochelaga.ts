import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { blocShop } from "../companies/blocShop";

export const blocShopHochelaga: ClimbingGym = {
  name: 'Bloc Shop Hochelaga',
  description: 'Bouldering, open since 2017.',
  parent: blocShop,
  address: {
    streetNumber: '2985',
    streetName: 'Rue Sainte-Catherine E',
    city: 'Montréal',
    region: 'QC',
    postalCode: 'H1W 3Y8',
    country: 'CA',
    latitude: 45.536,
    longitude: -73.543,
  },
  amenities: amenities('bouldering', 'free-weights'),
};
