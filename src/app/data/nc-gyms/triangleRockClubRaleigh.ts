import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { triangleRockClub } from "../companies/triangleRockClub";

export const triangleRockClubRaleigh: ClimbingGym = {
  name: 'Triangle Rock Club Raleigh',
  website: 'https://trianglerockclub.com',
  parent: triangleRockClub,
  address: {
    streetNumber: '6022',
    streetName: 'Duraleigh Rd',
    city: 'Raleigh',
    state: 'NC',
    postalCode: '27612',
    country: 'USA',
    latitude: 35.860,
    longitude: -78.710,
  },
  amenities: amenities('bouldering', 'top-rope', 'yoga'),
};
