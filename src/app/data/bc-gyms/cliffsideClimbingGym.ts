import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const cliffsideClimbingGym: ClimbingGym = {
  name: 'Cliffside Climbing Gym',
  website: 'https://cliffsideclimbing.com',
  address: {
    streetNumber: '954B',
    streetName: 'Laval Cres',
    city: 'Kamloops',
    region: 'BC',
    postalCode: 'V2C 5P5',
    country: 'CA',
    latitude: 50.672,
    longitude: -120.381,
  },
  amenities: amenities('bouldering', 'top-rope'),
};
