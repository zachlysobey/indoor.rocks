import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { rockreation } from "../companies/rockreation";

export const rockreationCostaMesa: ClimbingGym = {
  name: 'Rockreation Costa Mesa',
  website: 'https://www.rockreation.com/',
  parent: rockreation,
  address: {
    streetNumber: '1300',
    streetName: 'Logan Ave',
    city: 'Costa Mesa',
    region: 'CA',
    postalCode: '92626',
    country: 'US',
    latitude: 33.692,
    longitude: -117.900,
  },
  amenities: amenities(),
};
