import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { adamanta } from "../companies/adamanta";

export const adamantaDelValle: ClimbingGym = {
  name: 'Adamanta Del Valle',
  description: 'Bouldering only.',
  parent: adamanta,
  address: {
    streetNumber: '1439',
    streetName: 'Adolfo Prieto',
    city: 'Ciudad de México',
    region: 'CMX',
    postalCode: '03200',
    country: 'MX',
    latitude: 19.374,
    longitude: -99.170,
  },
  amenities: amenities('bouldering'),
};
