import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { vital } from "../companies/vital";

export const vitalBrooklyn: ClimbingGym = {
  name: 'Vital Brooklyn',
  website: 'https://www.vitalclimbinggym.com/brooklyn',
  parent: vital,
  address: {
    streetNumber: '221',
    streetName: 'N 14th St',
    city: 'Brooklyn',
    region: 'NY',
    postalCode: '11249',
    country: 'US',
    latitude: 40.723,
    longitude: -73.955,
  },
  amenities: amenities('bouldering', 'machines', 'free-weights', 'yoga', 'sauna'),
};
