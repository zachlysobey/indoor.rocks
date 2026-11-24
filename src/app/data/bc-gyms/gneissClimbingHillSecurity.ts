import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { gneissClimbing } from "../companies/gneissClimbing";

export const gneissClimbingHillSecurity: ClimbingGym = {
  name: 'Gneiss Climbing Hill Security',
  parent: gneissClimbing,
  address: {
    streetNumber: '740',
    streetName: 'Vaughan Ave',
    city: 'Kelowna',
    state: 'BC',
    postalCode: 'V1Y',
    country: 'Canada',
    latitude: 49.894,
    longitude: -119.483,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights'),
};
