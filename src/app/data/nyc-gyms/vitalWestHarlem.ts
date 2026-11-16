import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { vital } from "../companies/vital";

export const vitalWestHarlem: ClimbingGym = {
  name: 'Vital West Harlem',
  website: 'https://www.vitalclimbinggym.com/wh-ues-west-harlem',
  parent: vital,
  address: {
    streetNumber: '3225',
    streetName: 'Broadway',
    city: 'New York',
    state: 'NY',
    postalCode: '10027',
    country: 'USA',
  },
  amenities: amenities('bouldering', 'free-weights', 'yoga'),
};
