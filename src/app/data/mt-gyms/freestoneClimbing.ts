import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const freestoneClimbing: ClimbingGym = {
  name: 'Freestone Climbing Center',
  address: {
    streetNumber: '1200',
    streetName: 'Shakespeare St, Ste D',
    city: 'Missoula',
    region: 'MT',
    postalCode: '59802',
    country: 'US',
    latitude: 46.873,
    longitude: -114.012,
  },
  amenities: amenities('bouldering', 'lead'),
};
