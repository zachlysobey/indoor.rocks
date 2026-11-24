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
    region: 'BC',
    postalCode: 'V6V',
    country: 'CA',
    latitude: 49.192,
    longitude: -123.083,
  },
  amenities: amenities('bouldering'),
};
