import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { insightClimbing } from "../companies/insightClimbing";

export const insightClimbingBremerton: ClimbingGym = {
  name: 'Insight Climbing Bremerton',
  website: 'https://www.insightclimbing.com/',
  description: 'Bouldering facility with a treadwall and training walls.',
  parent: insightClimbing,
  address: {
    streetNumber: '2315',
    streetName: 'Burwell St',
    city: 'Bremerton',
    region: 'WA',
    postalCode: '98312',
    country: 'US',
    latitude: 47.567,
    longitude: -122.651,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines'),
};
