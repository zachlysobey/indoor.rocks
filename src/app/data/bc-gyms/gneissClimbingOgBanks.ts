import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { gneissClimbing } from "../companies/gneissClimbing";

export const gneissClimbingOgBanks: ClimbingGym = {
  name: 'Gneiss Climbing OG Banks',
  description: 'Bouldering only.',
  parent: gneissClimbing,
  address: {
    streetNumber: '430',
    streetName: 'Banks Rd, Unit 101',
    city: 'Kelowna',
    region: 'BC',
    postalCode: 'V1X 6A3',
    country: 'CA',
    latitude: 49.886,
    longitude: -119.437,
  },
  amenities: amenities('bouldering'),
};
