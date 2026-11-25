import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { theHive } from "../companies/theHive";

export const theHiveWinnipeg: ClimbingGym = {
  name: 'The Hive Winnipeg',
  website: 'https://www.hiveclimbing.com/locations/winnipeg',
  description: 'Bouldering, with a training area and Kilter Board.',
  parent: theHive,
  address: {
    streetNumber: '960',
    streetName: 'Lorimer Blvd',
    city: 'Winnipeg',
    region: 'MB',
    postalCode: 'R3P 1G1',
    country: 'CA',
    latitude: 49.832,
    longitude: -97.188,
  },
  amenities: amenities('bouldering'),
};
