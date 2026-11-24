import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const thresholdClimbing: ClimbingGym = {
  name: 'Threshold Climbing, Fitness + Yoga',
  address: {
    streetNumber: '6024',
    streetName: 'Westlake Memorial Pkwy',
    city: 'Oklahoma City',
    region: 'OK',
    postalCode: '73142',
    country: 'US',
    latitude: 35.610,
    longitude: -97.632,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
