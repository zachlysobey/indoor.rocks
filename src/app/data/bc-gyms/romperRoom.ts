import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const romperRoom: ClimbingGym = {
  name: 'Romper Room',
  website: 'https://climbromperroom.com',
  address: {
    streetNumber: '4385',
    streetName: 'Boban Dr',
    city: 'Nanaimo',
    region: 'BC',
    postalCode: 'V9T 5V9',
    country: 'CA',
    latitude: 49.208,
    longitude: -124.038,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights'),
};
