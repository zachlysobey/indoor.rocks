import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const vertRockGym: ClimbingGym = {
  name: 'Vert Rock Gym',
  website: 'https://www.teamactionsports.com/about/vert-gym-pg63.htm',
  address: {
    streetNumber: '9500',
    streetName: 'Brimhall Rd',
    city: 'Bakersfield',
    region: 'CA',
    postalCode: '93312',
    country: 'US',
    latitude: 35.383,
    longitude: -119.121,
  },
  amenities: amenities('bouldering', 'top-rope'),
};
