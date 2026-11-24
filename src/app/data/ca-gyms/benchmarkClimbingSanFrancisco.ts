import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { benchmarkClimbing } from "../companies/benchmarkClimbing";

export const benchmarkClimbingSanFrancisco: ClimbingGym = {
  name: 'Benchmark Climbing San Francisco',
  website: 'https://www.benchmarkclimbing.com/locations',
  description: 'Bouldering only.',
  parent: benchmarkClimbing,
  address: {
    streetNumber: '1414',
    streetName: 'Van Ness Ave',
    city: 'San Francisco',
    region: 'CA',
    postalCode: '94109',
    country: 'US',
    latitude: 37.789,
    longitude: -122.421,
  },
  amenities: amenities('bouldering', 'free-weights'),
};
