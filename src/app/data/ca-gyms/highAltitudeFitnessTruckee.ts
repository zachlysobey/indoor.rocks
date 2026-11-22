import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { highAltitudeFitness } from "../companies/highAltitudeFitness";

export const highAltitudeFitnessTruckee: ClimbingGym = {
  name: 'High Altitude Fitness Truckee',
  website: 'https://www.highaltitudefit.net/',
  parent: highAltitudeFitness,
  address: {
    streetNumber: '11798',
    streetName: 'Donner Pass Rd',
    city: 'Truckee',
    state: 'CA',
    postalCode: '96161',
    country: 'USA',
    latitude: 39.327,
    longitude: -120.207,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'machines', 'yoga', 'sauna'),
};
