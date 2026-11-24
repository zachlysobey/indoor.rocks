import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const couleeClimbing: ClimbingGym = {
  name: 'Coulee Climbing',
  description: 'Bouldering only.',
  address: {
    streetNumber: '1602',
    streetName: '3 Ave S, Unit 2',
    city: 'Lethbridge',
    region: 'AB',
    postalCode: 'T1J 0L2',
    country: 'CA',
    latitude: 49.697,
    longitude: -112.826,
  },
  amenities: amenities('bouldering'),
};
