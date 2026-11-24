import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const cliffsideClimbingGym: ClimbingGym = {
  name: 'Cliffside Climbing Gym',
  website: 'https://cliffsideclimbing.com',
  address: {
    streetNumber: '954B',
    streetName: 'Laval Cres',
    city: 'Kamloops',
    state: 'BC',
    postalCode: 'V2C 5P5',
    country: 'Canada',
    latitude: 50.672,
    longitude: -120.381,
  },
  amenities: amenities('bouldering', 'top-rope'),
};
