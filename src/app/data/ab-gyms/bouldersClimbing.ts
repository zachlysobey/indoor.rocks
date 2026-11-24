import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { rockJungleClimbing } from "../companies/rockJungleClimbing";

export const bouldersClimbing: ClimbingGym = {
  name: 'Boulders Climbing',
  description: 'Formerly Rock Jungle Boulders. Bouldering only, with a café.',
  parent: rockJungleClimbing,
  address: {
    streetNumber: '10505',
    streetName: '107 St NW',
    city: 'Edmonton',
    region: 'AB',
    postalCode: 'T5H 2Y5',
    country: 'CA',
    latitude: 53.551,
    longitude: -113.506,
  },
  amenities: amenities('bouldering'),
};
