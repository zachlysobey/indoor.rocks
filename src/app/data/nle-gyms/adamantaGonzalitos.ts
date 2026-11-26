import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { adamanta } from "../companies/adamanta";

export const adamantaGonzalitos: ClimbingGym = {
  name: 'Adamanta Gonzalitos',
  parent: adamanta,
  address: {
    streetNumber: '315',
    streetName: 'Av. Dr. José Eleuterio González',
    city: 'Monterrey',
    region: 'NLE',
    postalCode: '64050',
    country: 'MX',
    latitude: 25.688,
    longitude: -100.354,
  },
  amenities: amenities('bouldering', 'top-rope', 'yoga'),
};
