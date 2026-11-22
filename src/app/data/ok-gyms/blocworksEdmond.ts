import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { blocworks } from "../companies/blocworks";

export const blocworksEdmond: ClimbingGym = {
  name: 'Blocworks Edmond',
  parent: blocworks,
  website: 'https://climbblocworks.com',
  description: 'Bouldering only.',
  address: {
    streetNumber: '104',
    streetName: 'S Broadway',
    city: 'Edmond',
    state: 'OK',
    postalCode: '73034',
    country: 'USA',
    latitude: 35.653,
    longitude: -97.478,
  },
  amenities: amenities('bouldering'),
};
