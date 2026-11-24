import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const cayugaClimbs: ClimbingGym = {
  name: 'Cayuga Climbs',
  website: 'https://www.cayugaclimbs.com/',
  description: 'Bouldering only.',
  address: {
    streetNumber: '53',
    streetName: 'Hall Rd',
    city: 'Ithaca',
    region: 'NY',
    postalCode: '14850',
    country: 'US',
    latitude: 42.454,
    longitude: -76.437,
  },
  amenities: amenities('bouldering'),
};
