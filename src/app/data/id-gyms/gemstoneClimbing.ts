import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const gemstoneClimbing: ClimbingGym = {
  name: 'Gemstone Climbing Center',
  website: 'https://gemstoneclimbing.rocks',
  address: {
    streetNumber: '135',
    streetName: '5th Ave S',
    city: 'Twin Falls',
    region: 'ID',
    postalCode: '83301',
    country: 'US',
    latitude: 42.555,
    longitude: -114.468,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
