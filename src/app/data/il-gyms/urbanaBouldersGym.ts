import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { urbanaBoulders } from "../companies/urbanaBoulders";

export const urbanaBouldersGym: ClimbingGym = {
  name: 'Urbana Boulders',
  website: 'https://www.urbanaboulders.com/',
  description: 'Bouldering gym.',
  parent: urbanaBoulders,
  address: {
    streetNumber: '1502',
    streetName: 'N Cunningham Ave',
    city: 'Urbana',
    state: 'IL',
    postalCode: '61802',
    country: 'USA',
    latitude: 40.127,
    longitude: -88.196,
  },
  amenities: amenities('bouldering'),
};
