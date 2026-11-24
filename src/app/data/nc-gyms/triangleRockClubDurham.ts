import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { triangleRockClub } from "../companies/triangleRockClub";

export const triangleRockClubDurham: ClimbingGym = {
  name: 'Triangle Rock Club Durham',
  website: 'https://trianglerockclub.com',
  parent: triangleRockClub,
  address: {
    streetNumber: '1010',
    streetName: 'Martin Luther King Jr Pkwy',
    city: 'Durham',
    region: 'NC',
    postalCode: '27713',
    country: 'US',
    latitude: 35.952,
    longitude: -78.942,
  },
  amenities: amenities('bouldering', 'top-rope', 'yoga'),
};
