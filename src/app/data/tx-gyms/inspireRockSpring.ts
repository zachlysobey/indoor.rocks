import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { inspireRock } from "../companies/inspireRock";

export const inspireRockSpring: ClimbingGym = {
  name: 'inSPIRE Rock Spring',
  website: 'https://inspirerock.com/spring/',
  parent: inspireRock,
  address: {
    streetNumber: '403',
    streetName: 'E Louetta Rd',
    city: 'Spring',
    state: 'TX',
    postalCode: '77373',
    country: 'USA',
    latitude: 30.030,
    longitude: -95.430,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
