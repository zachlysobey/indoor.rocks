import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const blockhouseBouldering: ClimbingGym = {
  name: 'Blockhouse Bouldering Gym',
  description: 'Bouldering only.',
  address: {
    streetNumber: '3 1/2',
    streetName: 'E 1st St',
    city: 'The Plains',
    region: 'OH',
    postalCode: '45780',
    country: 'US',
    latitude: 39.369,
    longitude: -82.133,
  },
  amenities: amenities('bouldering'),
};
