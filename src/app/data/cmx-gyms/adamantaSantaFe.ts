import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { adamanta } from "../companies/adamanta";

export const adamantaSantaFe: ClimbingGym = {
  name: 'Adamanta Santa Fe',
  description: 'Bouldering only.',
  parent: adamanta,
  address: {
    streetNumber: '55',
    streetName: 'Calle 3',
    city: 'Ciudad de México',
    region: 'CMX',
    postalCode: '01219',
    country: 'MX',
    latitude: 19.361,
    longitude: -99.273,
  },
  amenities: amenities('bouldering'),
};
