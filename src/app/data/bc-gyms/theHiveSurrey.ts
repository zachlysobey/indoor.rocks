import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { theHive } from "../companies/theHive";

export const theHiveSurrey: ClimbingGym = {
  name: 'The Hive Surrey',
  website: 'https://www.hiveclimbing.com/locations/surrey',
  description: 'Bouldering only.',
  parent: theHive,
  address: {
    streetNumber: '11125',
    streetName: '124 St, Unit 101-B',
    city: 'Surrey',
    region: 'BC',
    postalCode: 'V3V 4V2',
    country: 'CA',
    latitude: 49.204,
    longitude: -122.880,
  },
  amenities: amenities('bouldering'),
};
