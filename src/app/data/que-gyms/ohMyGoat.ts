import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const ohMyGoat: ClimbingGym = {
  name: 'Oh My Goat',
  address: {
    streetNumber: '10',
    streetName: 'Calle 2 Pte.',
    city: 'San Juan del Río',
    region: 'QUE',
    postalCode: '76803',
    country: 'MX',
    latitude: 20.383,
    longitude: -99.992,
  },
  amenities: amenities('bouldering', 'aerial-silks'),
};
