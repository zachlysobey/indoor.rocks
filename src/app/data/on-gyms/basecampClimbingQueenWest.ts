import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { basecampClimbing } from "../companies/basecampClimbing";

export const basecampClimbingQueenWest: ClimbingGym = {
  name: 'Basecamp Climbing Queen West',
  description: 'Bouldering, in the former Toronto Underground Cinema.',
  parent: basecampClimbing,
  address: {
    streetNumber: '186',
    streetName: 'Spadina Ave',
    city: 'Toronto',
    region: 'ON',
    postalCode: 'M5T',
    country: 'CA',
    latitude: 43.649,
    longitude: -79.397,
  },
  amenities: amenities('bouldering'),
};
