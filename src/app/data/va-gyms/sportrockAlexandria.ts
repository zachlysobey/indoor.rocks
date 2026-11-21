import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { sportrock } from "../companies/sportrock";

export const sportrockAlexandria: ClimbingGym = {
  name: 'Sportrock Alexandria',
  website: 'https://www.sportrock.com/alexandria',
  parent: sportrock,
  address: {
    streetNumber: '5308',
    streetName: 'Eisenhower Ave',
    city: 'Alexandria',
    state: 'VA',
    postalCode: '22304',
    country: 'USA',
    latitude: 38.801,
    longitude: -77.127,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights', 'machines', 'yoga'),
};
