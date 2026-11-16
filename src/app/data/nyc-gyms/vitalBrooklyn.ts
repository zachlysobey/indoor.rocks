import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenityMap";
import { vital } from "../companies";

export const vitalBrooklyn: ClimbingGym = {
  name: 'Vital Brooklyn',
  parent: vital,
  address: {
    streetNumber: '221',
    streetName: 'N 14th St',
    city: 'Brooklyn',
    state: 'NY',
    postalCode: '11249',
    country: 'USA',
  },
  amenities: amenities('bouldering', 'machines', 'free-weights', 'yoga', 'sauna'),
};
