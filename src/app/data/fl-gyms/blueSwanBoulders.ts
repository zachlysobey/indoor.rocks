import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const blueSwanBoulders: ClimbingGym = {
  name: 'Blue Swan Boulders',
  website: 'https://blueswanboulders.com',
  description: 'Bouldering only. In Creative Village.',
  address: {
    streetNumber: '400',
    streetName: 'Pittman St',
    city: 'Orlando',
    region: 'FL',
    postalCode: '32801',
    country: 'US',
    latitude: 28.551,
    longitude: -81.388,
  },
  amenities: amenities('bouldering'),
};
