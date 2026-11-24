import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const nosotrosClimbingWeights: ClimbingGym = {
  name: 'Nosotros Climbing + Weights',
  website: 'https://gonosotros.com',
  description: 'Nonprofit bouldering gym in the Lakewood Screw Factory.',
  address: {
    streetNumber: '13000',
    streetName: 'Athens Ave',
    city: 'Lakewood',
    region: 'OH',
    postalCode: '44107',
    country: 'US',
    latitude: 41.479,
    longitude: -81.790,
  },
  amenities: amenities('bouldering', 'free-weights'),
};
