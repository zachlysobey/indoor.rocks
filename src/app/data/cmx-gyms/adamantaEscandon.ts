import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { adamanta } from "../companies/adamanta";

export const adamantaEscandon: ClimbingGym = {
  name: 'Adamanta Escandón',
  description: 'Bouldering only.',
  parent: adamanta,
  address: {
    streetNumber: '195',
    streetName: 'Av. José Martí',
    city: 'Ciudad de México',
    region: 'CMX',
    postalCode: '11800',
    country: 'MX',
    latitude: 19.403,
    longitude: -99.180,
  },
  amenities: amenities('bouldering'),
};
