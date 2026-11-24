import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { theHive } from "../companies/theHive";

export const theHiveHeights: ClimbingGym = {
  name: 'The Hive Heights',
  website: 'https://www.hiveclimbing.com/locations/vancouver-heights',
  description: 'Formerly Cliffhanger Vancouver; roped climbing, with bouldering upstairs.',
  parent: theHive,
  address: {
    streetNumber: '670',
    streetName: 'Industrial Ave',
    city: 'Vancouver',
    region: 'BC',
    postalCode: 'V6A 2P3',
    country: 'CA',
    latitude: 49.270,
    longitude: -123.091,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
