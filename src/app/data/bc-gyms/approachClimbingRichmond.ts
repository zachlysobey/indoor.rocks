import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const approachClimbingRichmond: ClimbingGym = {
  name: 'Approach Climbing Richmond',
  website: 'https://approachclimbing.pages.dev',
  description: 'Bouldering only, with an adjustable Kilter Board.',
  address: {
    streetNumber: '12080',
    streetName: 'Bridgeport Rd',
    city: 'Richmond',
    state: 'BC',
    postalCode: 'V6V',
    country: 'Canada',
    latitude: 49.192,
    longitude: -123.088,
  },
  amenities: amenities('bouldering'),
};
