import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const firstHandClimbing: ClimbingGym = {
  name: 'FirstHand Climbing',
  description: 'Bouldering only. Formerly Rock Box Bouldering.',
  address: {
    streetNumber: '1024',
    streetName: 'N Chestnut St',
    city: 'Winston-Salem',
    region: 'NC',
    postalCode: '27101',
    country: 'US',
    latitude: 36.105,
    longitude: -80.240,
  },
  amenities: amenities('bouldering', 'free-weights'),
};
