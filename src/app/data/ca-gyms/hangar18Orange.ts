import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { hangar18 } from "../companies/hangar18";

export const hangar18Orange: ClimbingGym = {
  name: 'Hangar 18 Orange',
  website: 'https://climbhangar18.com/orange/',
  description: 'Bouldering gym.',
  parent: hangar18,
  address: {
    streetNumber: '1547',
    streetName: 'W Struck Ave',
    city: 'Orange',
    state: 'CA',
    postalCode: '92867',
    country: 'USA',
    latitude: 33.818,
    longitude: -117.876,
  },
  amenities: amenities('bouldering'),
};
