import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { hubClimbing } from "../companies/hubClimbing";

export const hubClimbingMississauga: ClimbingGym = {
  name: 'Hub Climbing Mississauga',
  website: 'https://hubclimbing.com/mississauga/',
  parent: hubClimbing,
  address: {
    streetNumber: '3636',
    streetName: 'Hawkestone Rd, Unit 1',
    city: 'Mississauga',
    region: 'ON',
    postalCode: 'L5C 2V2',
    country: 'CA',
    latitude: 43.567,
    longitude: -79.635,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
