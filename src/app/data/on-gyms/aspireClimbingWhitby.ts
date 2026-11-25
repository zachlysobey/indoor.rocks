import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { aspireClimbing } from "../companies/aspireClimbing";

export const aspireClimbingWhitby: ClimbingGym = {
  name: 'Aspire Climbing Whitby',
  website: 'https://aspireclimbing.com/whitby',
  description: 'Climbing and Ninja Warrior.',
  parent: aspireClimbing,
  address: {
    streetNumber: '1400',
    streetName: 'Victoria St E, Unit 4',
    city: 'Whitby',
    region: 'ON',
    postalCode: 'L1N',
    country: 'CA',
    latitude: 43.865,
    longitude: -78.902,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
