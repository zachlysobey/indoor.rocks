import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { metroRock } from "../companies/metroRock";

export const metroRockLittleton: ClimbingGym = {
  name: 'MetroRock Littleton',
  website: 'https://littleton.metrorock.com/',
  parent: metroRock,
  address: {
    streetNumber: '1200',
    streetName: 'Constitution Ave',
    city: 'Littleton',
    state: 'MA',
    postalCode: '01460',
    country: 'USA',
    latitude: 42.552,
    longitude: -71.472,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
