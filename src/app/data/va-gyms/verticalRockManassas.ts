import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { verticalRock } from "../companies/verticalRock";

export const verticalRockManassas: ClimbingGym = {
  name: 'Vertical Rock Manassas',
  website: 'https://climb-va.com',
  parent: verticalRock,
  address: {
    streetNumber: '10225',
    streetName: 'Nokesville Rd',
    city: 'Manassas',
    region: 'VA',
    postalCode: '20110',
    country: 'US',
    latitude: 38.740,
    longitude: -77.492,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
