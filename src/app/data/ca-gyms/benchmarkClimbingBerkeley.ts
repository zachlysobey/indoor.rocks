import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { benchmarkClimbing } from "../companies/benchmarkClimbing";

export const benchmarkClimbingBerkeley: ClimbingGym = {
  name: 'Benchmark Climbing Berkeley',
  website: 'https://www.benchmarkclimbing.com/locations',
  description: 'Bouldering only.',
  parent: benchmarkClimbing,
  address: {
    streetNumber: '1607',
    streetName: 'Shattuck Ave',
    city: 'Berkeley',
    state: 'CA',
    postalCode: '94709',
    country: 'USA',
    latitude: 37.877,
    longitude: -122.269,
  },
  amenities: amenities('bouldering'),
};
