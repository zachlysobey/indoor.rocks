import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { hangar18 } from "../companies/hangar18";

export const hangar18HighDesert: ClimbingGym = {
  name: 'Hangar 18 High Desert',
  website: 'https://climbhangar18.com/high-desert/',
  parent: hangar18,
  address: {
    streetNumber: '15315',
    streetName: 'Cholame Rd',
    city: 'Victorville',
    state: 'CA',
    postalCode: '92392',
    country: 'USA',
    latitude: 34.511,
    longitude: -117.335,
  },
  amenities: amenities('bouldering', 'auto-belays', 'yoga'),
};
