import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { metroRock } from "../companies/metroRock";

export const metroRockVermont: ClimbingGym = {
  name: 'MetroRock Vermont',
  website: 'https://vt.metrorock.com/',
  parent: metroRock,
  address: {
    streetNumber: '320',
    streetName: 'Sunderland Way',
    city: 'Essex Junction',
    region: 'VT',
    postalCode: '05452',
    country: 'US',
    latitude: 44.508,
    longitude: -73.142,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights', 'yoga'),
};
