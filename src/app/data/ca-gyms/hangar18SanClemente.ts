import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { hangar18 } from "../companies/hangar18";

export const hangar18SanClemente: ClimbingGym = {
  name: 'Hangar 18 San Clemente',
  website: 'https://climbhangar18.com/san-clemente/',
  description: 'Bouldering gym.',
  parent: hangar18,
  address: {
    streetNumber: '1031',
    streetName: 'Calle Trepadora',
    city: 'San Clemente',
    region: 'CA',
    postalCode: '92673',
    country: 'US',
    latitude: 33.457,
    longitude: -117.605,
  },
  amenities: amenities('bouldering', 'yoga'),
};
