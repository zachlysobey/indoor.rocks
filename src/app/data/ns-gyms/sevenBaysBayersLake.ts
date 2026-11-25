import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { sevenBays } from "../companies/sevenBays";

export const sevenBaysBayersLake: ClimbingGym = {
  name: 'Seven Bays Bayers Lake',
  description: 'Bouldering only.',
  parent: sevenBays,
  address: {
    streetNumber: '114',
    streetName: 'Chain Lake Dr',
    city: 'Halifax',
    region: 'NS',
    postalCode: 'B3S 1B1',
    country: 'CA',
    latitude: 44.640,
    longitude: -63.665,
  },
  amenities: amenities('bouldering'),
};
