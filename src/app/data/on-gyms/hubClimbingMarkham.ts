import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { hubClimbing } from "../companies/hubClimbing";

export const hubClimbingMarkham: ClimbingGym = {
  name: 'Hub Climbing Markham',
  website: 'https://hubclimbing.com/markham/',
  parent: hubClimbing,
  address: {
    streetNumber: '165',
    streetName: 'McIntosh Dr',
    city: 'Markham',
    region: 'ON',
    postalCode: 'L3R 0N6',
    country: 'CA',
    latitude: 43.845,
    longitude: -79.367,
  },
  amenities: amenities('bouldering', 'auto-belays', 'yoga'),
};
