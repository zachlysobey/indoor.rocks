import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const reachIndoorClimbing: ClimbingGym = {
  name: 'Reach Indoor Climbing',
  website: 'https://reachindoorclimbing.ca',
  address: {
    streetNumber: '212',
    streetName: 'Earl Stewart Dr',
    city: 'Aurora',
    region: 'ON',
    postalCode: 'L4G 6V7',
    country: 'CA',
    latitude: 43.987,
    longitude: -79.452,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
