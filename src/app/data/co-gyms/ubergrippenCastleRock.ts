import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { ubergrippen } from "../companies/ubergrippen";

export const ubergrippenCastleRock: ClimbingGym = {
  name: 'Übergrippen Castle Rock',
  website: 'https://ugclimbing.com/castle-rock',
  parent: ubergrippen,
  address: {
    streetNumber: '3690',
    streetName: 'Bilberry St',
    city: 'Castle Rock',
    state: 'CO',
    postalCode: '80109',
    country: 'USA',
    latitude: 39.403,
    longitude: -104.886,
  },
  amenities: amenities('top-rope', 'auto-belays', 'yoga'),
};
