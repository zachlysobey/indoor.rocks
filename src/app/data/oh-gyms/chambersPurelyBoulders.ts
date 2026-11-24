import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { fiveLife } from "../companies/fiveLife";

export const chambersPurelyBoulders: ClimbingGym = {
  name: 'Chambers Purely Boulders',
  website: 'https://5.life',
  description: 'Bouldering only.',
  parent: fiveLife,
  address: {
    streetNumber: '1165',
    streetName: 'Chambers Rd',
    city: 'Columbus',
    region: 'OH',
    postalCode: '43212',
    country: 'US',
    latitude: 39.990,
    longitude: -83.039,
  },
  amenities: amenities('bouldering'),
};
