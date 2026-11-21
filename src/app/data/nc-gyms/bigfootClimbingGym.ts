import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const bigfootClimbingGym: ClimbingGym = {
  name: 'Bigfoot Climbing Gym',
  website: 'https://www.bigfootclimbinggym.com',
  description: 'Bouldering only.',
  address: {
    streetNumber: '212',
    streetName: 'Avery Ave',
    city: 'Morganton',
    state: 'NC',
    postalCode: '28655',
    country: 'USA',
    latitude: 35.745,
    longitude: -81.686,
  },
  amenities: amenities('bouldering'),
};
