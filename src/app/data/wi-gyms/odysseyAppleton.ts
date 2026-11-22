import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { odyssey } from "../companies/odyssey";

export const odysseyAppleton: ClimbingGym = {
  name: 'Odyssey Climbing + Fitness Appleton',
  website: 'https://www.odysseyclimbing.com/appleton',
  parent: odyssey,
  address: {
    streetNumber: '4150',
    streetName: 'N Galaxy Dr',
    city: 'Grand Chute',
    state: 'WI',
    postalCode: '54913',
    country: 'USA',
    latitude: 44.311,
    longitude: -88.446,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays', 'free-weights', 'yoga'),
};
