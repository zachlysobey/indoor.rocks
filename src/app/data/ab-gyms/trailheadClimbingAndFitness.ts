import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const trailheadClimbingAndFitness: ClimbingGym = {
  name: 'Trailhead Climbing + Fitness',
  address: {
    streetNumber: '33',
    streetName: 'McKenzie Cres, Unit 108',
    city: 'Red Deer County',
    region: 'AB',
    postalCode: 'T4S 2H4',
    country: 'CA',
    latitude: 52.258,
    longitude: -113.763,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
