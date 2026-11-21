import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { triangleRockClub } from "../companies/triangleRockClub";

export const triangleRockClubFayetteville: ClimbingGym = {
  name: 'Triangle Rock Club Fayetteville',
  website: 'https://trianglerockclub.com/fayetteville/',
  parent: triangleRockClub,
  address: {
    streetNumber: '5213',
    streetName: 'Raeford Rd',
    city: 'Fayetteville',
    state: 'NC',
    postalCode: '28304',
    country: 'USA',
    latitude: 35.045,
    longitude: -78.960,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
