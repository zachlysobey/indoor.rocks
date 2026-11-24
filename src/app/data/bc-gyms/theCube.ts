import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theCube: ClimbingGym = {
  name: 'The Cube',
  website: 'https://cubeclimbing.com',
  description: 'Run by the nonprofit Kootenay Climbing Association, in Mary Hall at Selkirk College.',
  address: {
    streetNumber: '820',
    streetName: 'Tenth St',
    city: 'Nelson',
    region: 'BC',
    postalCode: 'V1L 3C7',
    country: 'CA',
    latitude: 49.489,
    longitude: -117.296,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
