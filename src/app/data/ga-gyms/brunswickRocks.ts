import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const brunswickRocks: ClimbingGym = {
  name: 'Brunswick Rocks',
  description: 'Nonprofit, youth-focused bouldering gym.',
  address: {
    streetNumber: '1509',
    streetName: 'Newcastle St',
    city: 'Brunswick',
    state: 'GA',
    postalCode: '31520',
    country: 'USA',
    latitude: 31.150,
    longitude: -81.494,
  },
  amenities: amenities('bouldering'),
};
