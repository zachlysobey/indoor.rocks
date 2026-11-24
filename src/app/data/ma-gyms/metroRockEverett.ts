import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { metroRock } from "../companies/metroRock";

export const metroRockEverett: ClimbingGym = {
  name: 'MetroRock Everett',
  website: 'https://metrorock.com/everett-home',
  parent: metroRock,
  address: {
    streetNumber: '69',
    streetName: 'Norman St',
    city: 'Everett',
    region: 'MA',
    postalCode: '02149',
    country: 'US',
    latitude: 42.406,
    longitude: -71.065,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'yoga'),
};
