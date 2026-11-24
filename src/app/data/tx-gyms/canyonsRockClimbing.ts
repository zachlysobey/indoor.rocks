import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const canyonsRockClimbing: ClimbingGym = {
  name: 'Canyons Rock Climbing',
  website: 'https://www.canyonsclimbinggym.com/',
  address: {
    streetNumber: '7164',
    streetName: 'Technology Dr',
    city: 'Frisco',
    region: 'TX',
    postalCode: '75033',
    country: 'US',
    latitude: 33.152,
    longitude: -96.832,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'yoga'),
};
