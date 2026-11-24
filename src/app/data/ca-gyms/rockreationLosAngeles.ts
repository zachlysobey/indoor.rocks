import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { rockreation } from "../companies/rockreation";

export const rockreationLosAngeles: ClimbingGym = {
  name: 'Rockreation Los Angeles',
  website: 'https://www.rockreation.com/',
  parent: rockreation,
  address: {
    streetNumber: '11866',
    streetName: 'La Grange Ave',
    city: 'Los Angeles',
    region: 'CA',
    postalCode: '90025',
    country: 'US',
    latitude: 34.040,
    longitude: -118.448,
  },
  amenities: amenities(),
};
