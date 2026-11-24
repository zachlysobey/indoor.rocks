import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { verticalRock } from "../companies/verticalRock";

export const verticalRockTysons: ClimbingGym = {
  name: 'Vertical Rock Tysons',
  website: 'https://climb-va.com',
  description: 'Bouldering only.',
  parent: verticalRock,
  address: {
    streetNumber: '8461',
    streetName: 'Leesburg Pike',
    city: 'Vienna',
    region: 'VA',
    postalCode: '22182',
    country: 'US',
    latitude: 38.926,
    longitude: -77.238,
  },
  amenities: amenities('bouldering', 'free-weights'),
};
