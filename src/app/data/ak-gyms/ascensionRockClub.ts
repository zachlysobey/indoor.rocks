import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const ascensionRockClub: ClimbingGym = {
  name: 'Ascension Rock Club',
  website: 'https://ascensionrockclub.com',
  description: 'Bouldering only.',
  address: {
    streetNumber: '195',
    streetName: 'Alta Way',
    city: 'Fairbanks',
    state: 'AK',
    postalCode: '99701',
    country: 'USA',
    latitude: 64.846,
    longitude: -147.730,
  },
  amenities: amenities('bouldering'),
};
