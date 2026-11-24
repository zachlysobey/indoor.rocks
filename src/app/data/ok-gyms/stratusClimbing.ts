import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { stoneyard } from "../companies/stoneyard";

export const stratusClimbing: ClimbingGym = {
  name: 'Stratus Climbing',
  parent: stoneyard,
  description: 'Formerly Summit Norman.',
  address: {
    streetNumber: '2701',
    streetName: 'Washington Dr',
    city: 'Norman',
    region: 'OK',
    postalCode: '73069',
    country: 'US',
    latitude: 35.235,
    longitude: -97.475,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'yoga'),
};
