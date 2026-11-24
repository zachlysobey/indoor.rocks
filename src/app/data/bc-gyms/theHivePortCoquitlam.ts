import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { theHive } from "../companies/theHive";

export const theHivePortCoquitlam: ClimbingGym = {
  name: 'The Hive Port Coquitlam',
  website: 'https://www.hiveclimbing.com/locations/port-coquitlam',
  parent: theHive,
  address: {
    streetNumber: '815',
    streetName: 'Village Dr, Unit 145',
    city: 'Port Coquitlam',
    state: 'BC',
    postalCode: 'V3B 0G9',
    country: 'Canada',
    latitude: 49.250,
    longitude: -122.737,
  },
  amenities: amenities('bouldering', 'auto-belays'),
};
