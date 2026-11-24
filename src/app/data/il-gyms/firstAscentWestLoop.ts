import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { firstAscent } from "../companies/firstAscent";

export const firstAscentWestLoop: ClimbingGym = {
  name: 'First Ascent West Loop',
  website: 'https://faclimbing.com/chicago/west-loop/',
  description: 'Formerly Brooklyn Boulders Chicago; taken over by First Ascent in February 2026.',
  parent: firstAscent,
  address: {
    streetNumber: '100',
    streetName: 'S Morgan St',
    city: 'Chicago',
    region: 'IL',
    postalCode: '60607',
    country: 'US',
    latitude: 41.880,
    longitude: -87.652,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'machines', 'yoga'),
};
