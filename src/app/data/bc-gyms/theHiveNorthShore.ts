import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { theHive } from "../companies/theHive";

export const theHiveNorthShore: ClimbingGym = {
  name: 'The Hive North Shore',
  website: 'https://www.hiveclimbing.com/locations/north-shore',
  parent: theHive,
  address: {
    streetNumber: '2270',
    streetName: 'Dollarton Hwy, Unit 140',
    city: 'North Vancouver',
    state: 'BC',
    postalCode: 'V7H 1A8',
    country: 'Canada',
    latitude: 49.309,
    longitude: -123.026,
  },
  amenities: amenities('bouldering', 'yoga'),
};
