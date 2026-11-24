import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const firstAscentLibby: ClimbingGym = {
  name: '1st Ascent Climbing & Fitness',
  description: 'A 24-foot roped wall and bouldering, plus a 24/7 fitness gym.',
  address: {
    streetNumber: '412',
    streetName: 'Mineral Ave',
    city: 'Libby',
    region: 'MT',
    postalCode: '59923',
    country: 'US',
    latitude: 48.390,
    longitude: -115.555,
  },
  amenities: amenities('bouldering', 'free-weights'),
};
