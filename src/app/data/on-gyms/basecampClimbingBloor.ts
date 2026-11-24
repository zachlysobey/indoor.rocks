import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { basecampClimbing } from "../companies/basecampClimbing";

export const basecampClimbingBloor: ClimbingGym = {
  name: 'Basecamp Climbing Bloor',
  description: 'In a former theatre.',
  parent: basecampClimbing,
  address: {
    streetNumber: '677',
    streetName: 'Bloor St W',
    city: 'Toronto',
    region: 'ON',
    postalCode: 'M6G 1L3',
    country: 'CA',
    latitude: 43.664,
    longitude: -79.418,
  },
  amenities: amenities('bouldering', 'auto-belays'),
};
