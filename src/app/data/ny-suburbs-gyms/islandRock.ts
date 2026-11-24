import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const islandRock: ClimbingGym = {
  name: 'Island Rock',
  website: 'https://www.islandrock.com/',
  description: "Long Island's oldest climbing gym, open since 1996.",
  address: {
    streetNumber: '60',
    streetName: 'Skyline Dr',
    city: 'Plainview',
    region: 'NY',
    postalCode: '11803',
    country: 'US',
    latitude: 40.78775,
    longitude: -73.46541,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
