import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { triangleRockClub } from "../companies/triangleRockClub";

export const triangleRockClubRichmond: ClimbingGym = {
  name: 'Triangle Rock Club Richmond',
  website: 'https://trianglerockclub.com',
  parent: triangleRockClub,
  address: {
    streetNumber: '4700',
    streetName: 'Thalbro St',
    city: 'Richmond',
    state: 'VA',
    postalCode: '23230',
    country: 'USA',
    latitude: 37.589,
    longitude: -77.493,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
