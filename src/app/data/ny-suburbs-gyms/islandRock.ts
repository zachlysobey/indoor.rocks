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
    state: 'NY',
    postalCode: '11803',
    country: 'USA',
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
