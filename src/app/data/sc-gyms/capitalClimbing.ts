import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const capitalClimbing: ClimbingGym = {
  name: 'Capital Climbing',
  website: 'https://capitalgyms.com',
  description: 'Bouldering only.',
  address: {
    streetNumber: '901',
    streetName: 'State St',
    city: 'Cayce',
    state: 'SC',
    postalCode: '29033',
    country: 'USA',
    latitude: 33.986,
    longitude: -81.056,
  },
  amenities: amenities('bouldering'),
};
