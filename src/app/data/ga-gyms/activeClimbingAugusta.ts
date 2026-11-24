import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { activeClimbing } from "../companies/activeClimbing";

export const activeClimbingAugusta: ClimbingGym = {
  name: 'Active Climbing Augusta',
  parent: activeClimbing,
  address: {
    streetNumber: '643',
    streetName: 'S Old Belair Rd',
    city: 'Grovetown',
    region: 'GA',
    postalCode: '30813',
    country: 'US',
    latitude: 33.486,
    longitude: -82.136,
  },
  amenities: amenities(),
};
