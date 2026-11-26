import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const boulderCorp: ClimbingGym = {
  name: 'Boulder Corp',
  website: 'https://www.bouldercorp.com.mx',
  address: {
    streetNumber: 'SM 313 Mz 14 Lt 1-01',
    streetName: 'Av. Fonatur',
    city: 'Cancún',
    region: 'ROO',
    postalCode: '77560',
    country: 'MX',
    latitude: 21.131,
    longitude: -86.851,
  },
  amenities: amenities('bouldering'),
};
