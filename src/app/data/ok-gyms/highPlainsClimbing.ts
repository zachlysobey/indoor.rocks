import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const highPlainsClimbing: ClimbingGym = {
  name: 'High Plains Climbing',
  website: 'https://highplainsclimbing.com',
  description: 'Routes up to 90 feet in converted grain silos. Formerly Summit OKC.',
  address: {
    streetNumber: '200',
    streetName: 'SE 4th St',
    city: 'Oklahoma City',
    region: 'OK',
    postalCode: '73129',
    country: 'US',
    latitude: 35.462,
    longitude: -97.509,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
