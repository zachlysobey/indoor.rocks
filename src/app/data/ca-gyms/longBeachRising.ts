import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const longBeachRising: ClimbingGym = {
  name: 'Long Beach Rising',
  website: 'https://www.longbeachrising.com/',
  description: 'Bouldering gym in a historic building.',
  address: {
    streetNumber: '205',
    streetName: 'E Anaheim St',
    city: 'Long Beach',
    region: 'CA',
    postalCode: '90813',
    country: 'US',
    latitude: 33.782,
    longitude: -118.191,
  },
  amenities: amenities('bouldering', 'yoga', 'sauna'),
};
