import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { triangleRockClub } from "../companies/triangleRockClub";

export const triangleRockClubMorrisville: ClimbingGym = {
  name: 'Triangle Rock Club Morrisville',
  website: 'https://trianglerockclub.com',
  parent: triangleRockClub,
  address: {
    streetNumber: '102',
    streetName: 'Pheasant Wood Ct',
    city: 'Morrisville',
    region: 'NC',
    postalCode: '27560',
    country: 'US',
    latitude: 35.811,
    longitude: -78.821,
  },
  amenities: amenities('bouldering', 'top-rope', 'yoga'),
};
