import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { adamanta } from "../companies/adamanta";

export const adamantaPuebla: ClimbingGym = {
  name: 'Adamanta Puebla',
  description: 'Bouldering only.',
  parent: adamanta,
  address: {
    streetNumber: '7',
    streetName: 'Blvd. Kepler',
    city: 'Puebla',
    region: 'PUE',
    postalCode: '',
    country: 'MX',
    latitude: 19.028,
    longitude: -98.237,
  },
  amenities: amenities('bouldering'),
};
