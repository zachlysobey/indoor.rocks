import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { klimat } from "../companies/klimat";

export const klimatWakefield: ClimbingGym = {
  name: 'Klimat Wakefield',
  description: 'Bouldering and fitness.',
  parent: klimat,
  address: {
    streetNumber: '911',
    streetName: 'Ch Riverside',
    city: 'Wakefield',
    region: 'QC',
    postalCode: 'J0X 3G0',
    country: 'CA',
    latitude: 45.640,
    longitude: -75.930,
  },
  amenities: amenities('bouldering', 'free-weights', 'yoga'),
};
