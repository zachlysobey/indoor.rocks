import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { stoneAge } from "../companies/stoneAge";

export const stoneAgeNorth: ClimbingGym = {
  name: 'Stone Age Climbing Gym North',
  website: 'https://www.climbstoneage.com',
  parent: stoneAge,
  address: {
    streetNumber: '6200',
    streetName: 'Alameda Blvd NE',
    city: 'Albuquerque',
    region: 'NM',
    postalCode: '87113',
    country: 'US',
    latitude: 35.198,
    longitude: -106.587,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
